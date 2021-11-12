import * as stream from 'stream';

import axios from 'axios';

import { Request, Response } from 'express';
import { createWriteStream } from 'fs';
import { promisify } from 'util';

import * as constants from '@business/constants';
import * as accessors from '@business/database/accessors';
import * as mappers from '@business/database/mappers';
import * as errors from '@business/errors';

import { database } from '@business/preloaded';
import { assertBodyData, reply, AccessToken } from '@business/utilities';

import * as mailingLogic from './mailing';
import * as nameTokensLogic from './nameTokens';

export async function checkIfEmailIsAvailable(request: Request, response: Response) {
  interface IBodyParams {
    email: string;
  }

  const { email }: IBodyParams = request.body;
  assertBodyData(email);

  const targetedEmail = await database.oneOrNone(accessors.sqlReadEmail, { email });

  reply(response, { success: !targetedEmail });
}

function downloadPhoto(photoUrl: string, outputPath: string) {
  const writer = createWriteStream(outputPath);

  return axios({ method: 'GET', url: photoUrl, responseType: 'stream' })
    .then(async response => {
      response.data.pipe(writer);
      return promisify(stream.finished)(writer);
    });
}

async function saveUserPhoto(photoUrl: string, userSocialId: string) {
  const localPhotoPath = `media/${userSocialId}`;

  try {
    await downloadPhoto(photoUrl, localPhotoPath);
    return localPhotoPath;
  } catch {
    return 'media/user-default.png';
  }
}

export async function prepareUser(request: Request, response: Response) {
  interface IBodyParams {
    email: string;
    inviterId: string | null;
    socialId: string;
    fullName: string;
    photoUrl: string;
    currentPosition: string;
    companyId: string;
    createdCompanyName: string | null;
    currentWorkYearFrom: number;
    currentWorkMonthFrom: number;
  }

  const { photoUrl = constants.DEFAULT_PHOTO_PLACEHOLDER_URL, ...rest }: IBodyParams = request.body;
  const { email, inviterId, socialId, fullName, companyId, createdCompanyName } = rest;
  assertBodyData(photoUrl, email, inviterId, socialId, fullName, companyId, createdCompanyName);

  // We have to check for conflicts despite existing API checker
  // since we cannot expext the API's users to make all needed checks before calling
  // the preparation endpoint.

  const targetUser = await database.oneOrNone(accessors.sqlReadUserBySocialId, { socialId });
  if (targetUser) {
    throw new errors.ConflictError('User with provided social ID already exists.');
  }

  const targetedEmail = await database.oneOrNone(accessors.sqlReadEmail, { email });
  if (targetedEmail) {
    throw new errors.ConflictError('Attempt to register email that is already in use.');
  }

  // Get predefined company if found otherwice create a new one and use it.
  const company = await getPreparedCompany(companyId, createdCompanyName);

  // Save user photo at the server (or provide link to a default placeholder).
  const savedPhotoUrl = await saveUserPhoto(photoUrl, socialId);

  const createdUserEntity = await database.oneOrNone<{ id: string; }>(accessors.sqlCreateUser, {
    ...request.body,
    photoUrl: savedPhotoUrl,
    companyId: company.id
  });

  if (!createdUserEntity) {
    throw new errors.ConflictError('Cannot create user with provided data.');
  }

  const createdUser = mappers.normalizeUserEntity(createdUserEntity);

  // The ID is guaranteed to be defined.
  await nameTokensLogic.saveName(createdUser.id as string, fullName);

  // All the fields are guaranteed to be defined.
  await sendFirstConfirmation(
    createdUser.email as string,
    createdUser.confirmationCode as string
  );

  reply(response);
}

/**
 * Send confirmation code to a user.
 * The function is responsible for the first confirmation sending.
 * The function is called right after the registration when the user's datum are available.
 * Therefore, their email and code are passed directly.
 */
export async function sendFirstConfirmation(email: string, confirmationCode: string) {
  await mailingLogic.sendConfirmationMail(email, confirmationCode);
}

/**
 * Send confirmation code to a user.
 * The function is called after triggering the corresponding API endpoints
 * which are responsible either for:
 *   1) resending the confirmation or
 *   2) resending the confirmation and updating the email.
 * Eitherway user's private token is required.
 *
 * The confirmation never changes.
 *
 * If an email is provided it is treated as user's new email and replace previous one.
 */
export async function resendConfirmation(request: Request, response: Response) {
  interface IBodyData {
    privateToken: string;
    updatedEmail?: string;
  }

  const { privateToken, updatedEmail }: IBodyData = request.body;
  assertBodyData(privateToken, updatedEmail);

  const targetAccessor = accessors.sqlReadUserByPrivateToken;
  let targetUser;

  try {
    targetUser = await database.oneOrNone(targetAccessor, { privateToken });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }

  if (!targetUser) {
    throw new errors.ForbiddenError('Inacceptable private token.');
  }

  // Update email if needed.
  if (updatedEmail) {
    const updateAccessor = accessors.sqlUpdateUsersEmail;

    try {
      await database.none(updateAccessor, { privateToken, updatedEmail });
    } catch {
      throw new errors.InternalServerError('Database conflict.');
    }
  }

  await mailingLogic.sendConfirmationMail(
    updatedEmail || targetUser.email,
    targetUser.confirmationCode
  );

  reply(response);
}

export async function confirmRegistration(request: Request, response: Response) {
  interface IBodyParams {
    confirmationCode: string;
  }

  const { confirmationCode }: IBodyParams = request.body;
  assertBodyData(confirmRegistration);

  const confirmationData = await database.oneOrNone<{ id: string; }>(
    accessors.sqlReadConfirmation, { codeValue: confirmationCode }
  );

  if (!confirmationData) {
    throw new errors.NotFoundError('Inconsistent confirmation data provided.');
  }

  try {
    await database.none(accessors.sqlDeleteConfirmation, { id: confirmationData.id });

    reply(response, { message: 'Success.' });
  } catch {
    throw new errors.InternalServerError('Impossible to confirm provided code.');
  }
}

export async function getPreparedCompany(id: string, name: string | null) {
  const company = await database.oneOrNone<{ id: string; }>(accessors.sqlReadCompany, { id });

  return company || database.one<{ id: string; }>(accessors.sqlCreateCompany, { name });
}

export async function retrieveProfile(request: Request, response: Response) {
  const accessToken = new AccessToken(request.cookies['accessToken']);

  if (!accessToken.socialMedia || !accessToken.tokenValue) {
    throw new errors.UnauthorizedError('No valid access token provided');
  }

  if (accessToken.socialMedia === 'linkedin') {
    reply(response, { result: retrieveProfileWithLinkedIn(accessToken.tokenValue) });
  }

  // TODO: Google profile retrieving.
}

async function retrieveProfileWithLinkedIn(accessToken: string) {
  let profile: { id: string; } | null = null;

  try {
    const profileLink = 'https://api.linkedin.com/v2/me';
    const profileOptions = { headers: { Authorization: `Bearer ${accessToken}` } };
    profile = await axios.get(profileLink, profileOptions);
  } catch {
    throw new errors.UnauthorizedError('LinkedIn refused to authorize.');
  }

  // @ts-ignore: profile.id is guaranteed to be defined here.
  return retrieveLocalProfileData(profile.id);
}

async function retrieveLocalProfileData(socialId: string) {
  let targetEntity = null;
  let confirmed = false;

  try {
    const targetAccessor = accessors.sqlReadUserWithCompanyBySocialId;
    targetEntity = await database.oneOrNone(targetAccessor, { socialId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }

  if (!targetEntity) {
    return {
      socialId,
      registered: false,
      confirmed
    };
  }

  try {
    const targetAccessor = accessors.sqlReadConfirmationBySocialId;
    confirmed = !await database.oneOrNone(targetAccessor, { socialId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }

  return {
    ...mappers.normalizeUserEntity(targetEntity),
    registered: true,
    confirmed
  };
}
