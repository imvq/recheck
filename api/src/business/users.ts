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

export async function checkIfUserIsRegistered(request: Request, response: Response) {
  interface IBodyParams {
    socialId: string;
  }

  const { socialId }: IBodyParams = request.body;
  assertBodyData(socialId);

  const targetUser = await database.oneOrNone(accessors.sqlFindUserBySocialId, { socialId });

  reply(response, { success: !!targetUser });
}

export async function checkIfUserIsConfirmed(request: Request, response: Response) {
  interface IBodyParams {
    socialId: string;
  }

  const { socialId }: IBodyParams = request.body;
  assertBodyData(socialId);

  const confirmation = await database.oneOrNone(accessors.sqlFindUserConfirmation, { socialId });

  reply(response, { success: !confirmation });
}

export async function checkIfEmailIsAvailable(request: Request, response: Response) {
  interface IBodyParams {
    email: string;
  }

  const { email }: IBodyParams = request.body;
  assertBodyData(email);

  const targetedEmail = await database.oneOrNone(accessors.sqlFindEmail, { email });

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

  const targetUser = await database.oneOrNone(accessors.sqlFindUserBySocialId, { socialId });
  if (targetUser) {
    throw new errors.ConflictError('User with provided social ID already exists.');
  }

  const targetedEmail = await database.oneOrNone(accessors.sqlFindEmail, { email });
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

  const createdUser = mappers.mapDatabaseEntityToUserSelfInfo(createdUserEntity);

  // The ID is guaranteed to be defined.
  await nameTokensLogic.saveName(createdUser.id as string, fullName);

  // All the fields are guaranteed to be defined.
  await mailingLogic.sendConfirmationMail(
    createdUser.email as string,
    createdUser.confirmationCode as string
  );

  reply(response);
}

export async function getPreparedCompany(id: string, name: string | null) {
  const company = await database.oneOrNone<{ id: string; }>(accessors.sqlFindCompany, { id });

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
  let targetEntity = null;

  try {
    const profileLink = 'https://api.linkedin.com/v2/me';
    const profileOptions = { headers: { Authorization: `Bearer ${accessToken}` } };
    profile = await axios.get(profileLink, profileOptions);
  } catch {
    throw new errors.UnauthorizedError('LinkedIn refused to authorize.');
  }

  try {
    const targetAccessor = accessors.sqlFindUserWithCompanyBySocialId;
    const socialId = profile?.id;
    targetEntity = await database.oneOrNone(targetAccessor, { socialId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }

  if (!targetEntity) {
    throw new errors.ConflictError('No user registered for this social media ID.');
  }

  return mappers.mapDatabaseEntityToUserSelfInfo(targetEntity);
}
