import * as stream from 'stream';

import axios from 'axios';

import { Request, Response } from 'express';
import { createWriteStream } from 'fs';
import { promisify } from 'util';

import * as constants from '@business/constants';
import * as accessors from '@business/database/accessors';
import * as mappers from '@business/database/mappers';
import * as errors from '@business/errors';

import { assertBodyData, assertPathParamsData, reply, AccessToken } from '@business/commons';

import * as mailingLogic from './mailing';
import * as nameTokensLogic from './nameTokens';

/**
 * When a user register on the website they have to check
 * their email address availability.
 * The function is used to check if an email is already present in the database.
 */
export async function checkIfEmailIsAvailable(request: Request, response: Response) {
  interface IBodyData {
    email: string;
  }

  const { email }: IBodyData = request.body;
  assertBodyData(email);

  const targetedEmail = await accessors.readEmail(email);

  reply(response, { success: !targetedEmail });
}

/**
 * To view someone's profile a user must have appropriate rights access.
 *
 * When a user tries to force view unavailable profile it must result with an error.
 * However, while observing the list with unavailable users within the web client
 * must preliminarily check if the user would be able to view some profile
 * before the user proceeds to that profile page.
 */
export async function checkIfUserCanBeViewed(request: Request, response: Response) {
  interface IBodyData {
    privateToken: string;
    targetShareableId: string;
  }

  const { privateToken, targetShareableId }: IBodyData = request.body;
  assertBodyData(privateToken, targetShareableId);

  const asker = await accessors.readUserByPrivateToken(privateToken);
  const availability = await accessors.readUserAvailability(asker.id, targetShareableId);

  reply(response, { success: !!availability });
}

/**
 * Check if a user has free views.
 */
export async function checkIfUserHasViewsAvailable(request: Request, response: Response) {
  interface IBodyData {
    privateToken: string;
  }

  const { privateToken }: IBodyData = request.body;
  assertBodyData(privateToken);

  const user = await accessors.readUserByPrivateToken(privateToken);

  reply(response, { success: parseInt(user['reviews_available']) > 0 });
}

/**
 * As there is no guarantee that users' photos are available all the time
 * (since they located on third-party resourses) the photos must be saved locally.
 *
 * Saving also makes it posible to process photos making them more optimized
 * for the website use-cases.
 */
async function saveUserPhoto(photoUrl: string, userSocialId: string) {
  const localPhotoPath = `media/${userSocialId}`;

  try {
    await downloadPhoto(photoUrl, localPhotoPath);
    return localPhotoPath;
  } catch {
    return `${process.env.API_ORIGIN || process.env.ORIGIN}/media/user-default.png`;
  }
}

function downloadPhoto(photoUrl: string, outputPath: string) {
  const writer = createWriteStream(outputPath);

  return axios({ method: 'GET', url: photoUrl, responseType: 'stream' })
    .then(async response => {
      response.data.pipe(writer);
      return promisify(stream.finished)(writer);
    });
}

/**
 * Save a user.
 *
 * User's data is supposed to be retrieved from a social media user is authenticated with
 * and from the user's input.
 *
 * Saving does not mean the user is able to use the website since they have to confirm
 * themselves first.
 */
export async function prepareUser(request: Request, response: Response) {
  interface IBodyData {
    email: string;
    inviterId: string | null;
    socialId: string;
    fullName: string;
    photoUrl: string;
    currentPosition: string;
    company: { id: string; name: string | null; }
    currentWorkYearFrom: number;
    currentWorkMonthFrom: number;
  }

  const { photoUrl = constants.DEFAULT_PHOTO_PLACEHOLDER_URL, ...rest }: IBodyData = request.body;
  const { email, inviterId, socialId, fullName, company } = rest;
  assertBodyData(photoUrl, email, inviterId, socialId, fullName, company);

  // We have to check for conflicts despite existing API checker
  // since we cannot expext the API's users to make all needed checks before calling
  // the preparation endpoint.

  const targetUser = await accessors.readUserBySocialId(socialId);
  if (targetUser) {
    throw new errors.ConflictError('User with provided social ID already exists.');
  }

  const targetedEmail = await accessors.readEmail(email);
  if (targetedEmail) {
    throw new errors.ConflictError('Attempt to register email that is already in use.');
  }

  // Get predefined company if found otherwice create a new one and use it.
  const companyEntity = await getPreparedCompany(company.id, company.name);

  // Save user photo at the server (or provide link to a default placeholder).
  const savedPhotoUrl = await saveUserPhoto(photoUrl, socialId);

  const createdUserEntity = await accessors.createUser({
    ...request.body,
    photoUrl: savedPhotoUrl,
    companyId: companyEntity.id
  });

  const createdUser = mappers.normalizeCreatedUser(createdUserEntity);

  const confirmationEntity = await accessors.createConfirmation(createdUser.id);
  const confirmation = mappers.normalizeConfirmation(confirmationEntity);

  // The ID is guaranteed to be defined.
  await nameTokensLogic.saveName(createdUser.id, fullName);

  // All the fields are guaranteed to be defined.
  await sendFirstConfirmation(createdUser.email, confirmation.codeValue);

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
  assertBodyData(privateToken);

  const targetUser = await accessors.readUserByPrivateToken(privateToken);
  const targetEmail = updatedEmail || targetUser.email;

  // Update email if needed.
  if (updatedEmail) {
    await accessors.updateEmail(privateToken, updatedEmail);
  }

  await mailingLogic.sendConfirmationMail(targetEmail, targetUser.confirmationCode);

  reply(response);
}

/**
 * To be able to use the website a user must confirm themselves.
 * For that purpose, they need to provide the confirmation code received by email.
 *
 * To avoid data clogging, the confirmation entity is deleted after successful confirming.
 *
 * If a user doesn't have a corresponding confirmation code record they are considered confirmed.
 */
export async function confirmRegistration(request: Request, response: Response) {
  interface IBodyData {
    confirmationCode: string;
  }

  const { confirmationCode }: IBodyData = request.body;
  assertBodyData(confirmationCode);

  await accessors.deleteConfirmation(confirmationCode);

  reply(response, { message: 'Success.' });
}

/**
 * There are two use-cases when a user choose their company:
 *   1) the company is chosen from the list of existing companies;
 *   2) the company is created.
 *
 * If a user choose a company the web client sends its ID as a companyId parameter.
 * The companyName parameter is to be null.
 *
 * If a user creates a new company the web client sends its name.
 * The companyId parameter is to be -1.
 * Technically, When any invalid ID is passed the company is considered as a new one
 * and the API will try to create it using provided name.
 *
 */
export async function getPreparedCompany(id: string, name: string | null) {
  const company = await accessors.readCompany(id);

  return company || accessors.createCompany(name);
}

/**
 * Since LinkedIn provides limited access and API calls
 * their OAuth is used only for identifying users
 * (as both LinkedIn and Google OAuth provide IDs for each user).
 * The same approach is applied to Google OAuth to avoid incoherence.
 *
 * All the information about users is stored at the server.
 * Each user has a social ID which is the ID provided by LinkedIn or Google.
 * User info can be retrieved when a social network identifies the user
 * and provide a valid social ID. Then the server's API collects user info
 * and sends the asker the info including a private token the user can get private access with.
 */
export async function retrieveProfile(request: Request, response: Response) {
  interface IPathParams {
    accessToken: string;
  }

  // @ts-ignore: Request<ParamsDictionary> is guarenteed to be compatible with IPathParams.
  const { accessToken }: IPathParams = request.params as IPathParams;
  assertPathParamsData(accessToken);

  const parsedAccessToken = new AccessToken(accessToken);

  if (!parsedAccessToken.socialMedia || !parsedAccessToken.tokenValue) {
    throw new errors.ForbiddenError('No valid access token provided.');
  }

  if (parsedAccessToken.socialMedia === 'linkedin') {
    const socialId = await retrieveSocialIdFromLinkedIn(parsedAccessToken.tokenValue);
    const savedLocalUser = await retrieveLocalProfileData(socialId);

    reply(response, savedLocalUser);
  }

  // TODO: Google profile retrieving.
}

/**
 * Retrieving social ID from LinkedIn.
 */
async function retrieveSocialIdFromLinkedIn(accessToken: string) {
  try {
    const profileLink = 'https://api.linkedin.com/v2/me';
    const profileOptions = { headers: { Authorization: `Bearer ${accessToken}` } };
    const profile = await axios.get(profileLink, profileOptions);

    return profile.data.id;
  } catch {
    throw new errors.ForbiddenError('LinkedIn refused to authorize.');
  }
}

/**
 * Retrieving locally saved personal profile data.
 * If no profile found then the user is not registered yet (therefore, not confirmed as well).
 * If no confirmation code record is present then the user is already confirmed.
 */
async function retrieveLocalProfileData(socialId: string) {
  const targetUserEntity = await accessors.readUserWithCompanyBySocialId(socialId);

  if (!targetUserEntity) {
    return {
      socialId,
      registered: false,
      confirmed: false
    };
  }

  return {
    ...mappers.normalizePersonalUserInfo(targetUserEntity),
    registered: true,
    confirmed: !await accessors.readConfirmationBySocialId(socialId)
  };
}

/**
 * Retrieve users working at the same company with the asker.
 */
export async function getColleagues(request: Request, response: Response) {
  interface IBodyData {
    privateToken: string;
  }

  const { privateToken }: IBodyData = request.body;
  assertBodyData(privateToken);

  const userEntity = await accessors.readUserWithCompanyByPrivateToken(privateToken);
  const user = mappers.normalizePersonalUserInfo(userEntity);

  const colleagues = await accessors.readColleagues(user.privateToken, user.currentCompanyId);

  const result = colleagues.map(colleague => mappers.normalizePublicUserInfo(colleague));
  reply(response, result);
}

/**
 * Check if a user can leave a review about another one.
 */
export async function canUserLeaveReview(request: Request, response: Response) {
  interface IPathParams {
    privateToken: string;
    targetShareableId: string;
  }

  // @ts-ignore: Request<ParamsDictionary> is guarenteed to be compatible with IPathParams.
  const { privateToken, targetShareableId }: IPathParams = request.params as IPathParams;
  assertPathParamsData(privateToken, targetShareableId);

  const askerEntity = await accessors.readUserWithCompanyByPrivateToken(privateToken);
  const asker = mappers.normalizePublicUserInfo(askerEntity);
  const targetEntity = await accessors.readUserWithCompanyByShareableId(targetShareableId);
  const target = mappers.normalizePublicUserInfo(targetEntity);

  reply(response, { success: asker.currentCompanyId === target.currentCompanyId });
}

/**
 * Make a user available to another one.
 */
export async function makeUserAvailable(request: Request, response: Response) {
  interface IBodyData {
    privateToken: string;
    targetShareableId: string;
  }

  const { privateToken, targetShareableId }: IBodyData = request.body;
  assertBodyData(privateToken, targetShareableId);

  const user = await accessors.readUserByPrivateToken(privateToken);

  if (parseInt(user['reviews_available']) === 0) {
    throw new errors.ConflictError('Akser does not have available reviews.');
  }

  const availability = await accessors.readUserAvailability(user.id, targetShareableId);

  if (availability) {
    throw new errors.ConflictError('Availability is already provided.');
  }

  await accessors.decreaseReviewsAvailable(privateToken);
  await accessors.createUserAvailability(privateToken, targetShareableId);

  reply(response);
}
