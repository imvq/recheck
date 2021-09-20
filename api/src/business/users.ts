import { Request, Response } from 'express';

import * as accessors from '@business/database/accessors';
import * as constants from '@business/constants';
import * as errors from '@business/errors';

import { database } from '@business/preloaded';
import { assertBodyData, reply } from '@business/utilities';

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
  const { email, inviterId, socialId, fullName: name, companyId, createdCompanyName } = rest;
  assertBodyData(email, inviterId, socialId, name, photoUrl);

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
  const createdUser = await database.oneOrNone(accessors.sqlCreateUser, {
    ...request.body,
    companyId: company.id
  });

  if (!createdUser) {
    throw new errors.ConflictError('Cannot create user with provided data.');
  }

  reply(response);
}

export async function getPreparedCompany(id: string, name: string | null) {
  const company = await database.oneOrNone<{ id: string; }>(accessors.sqlFindCompany, { id });

  return company || database.one<{ id: string; }>(accessors.sqlCreateCompany, { name });
}
