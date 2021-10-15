import axios from 'axios';

import { Request, Response } from 'express';

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

  reply(response, { message: !!targetUser });
}

export async function checkIfUserIsConfirmed(request: Request, response: Response) {
  interface IBodyParams {
    socialId: string;
  }

  const { socialId }: IBodyParams = request.body;
  assertBodyData(socialId);

  const confirmation = await database.oneOrNone(accessors.sqlFindUserConfirmation, { socialId });

  reply(response, { message: !confirmation });
}

export async function checkIfEmailIsAvailable(request: Request, response: Response) {
  interface IBodyParams {
    email: string;
  }

  const { email }: IBodyParams = request.body;
  assertBodyData(email);

  const targetedEmail = await database.oneOrNone(accessors.sqlFindEmail, { email });

  reply(response, { message: !targetedEmail });
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
  const createdUserEntity = await database.oneOrNone<{ id: string; }>(accessors.sqlCreateUser, {
    ...request.body,
    companyId: company.id
  });

  if (!createdUserEntity) {
    throw new errors.ConflictError('Cannot create user with provided data.');
  }

  const createdUser = mappers.mapDatabaseEntityToUser(createdUserEntity);

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
    reply(response, { result: retrieveProfileFromLinkedIn(accessToken.tokenValue) });
  }

  // TODO: Google profile retrieving.
}

async function retrieveProfileFromLinkedIn(accessToken: string) {
  const config = { headers: { Authorization: `Bearer ${accessToken}` } };

  const { data: profile } = await axios.get('https://api.linkedin.com/v2/me', config);

  const { data: photo } = await axios.get(
    'https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~digitalmediaAsset:playableStreams))',
    config
  );

  const highestQualityPicture = photo.profilePicture['displayImage~'].elements[
    photo.profilePicture['displayImage~'].elements.length - 1
  ];

  const socialId = profile.id;

  const targetUserEntity = await database.oneOrNone(accessors.sqlFindUserBySocialId, { socialId });

  if (!targetUserEntity) {
    throw new errors.ConflictError('No user registered for this social media ID.');
  }

  return mappers.mapDatabaseEntityToUser(targetUserEntity);
}
