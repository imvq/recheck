import { Request, Response } from 'express';

import * as accessors from '@business/database/accessors';

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

export async function prepareUser(request: Request, response: Response) {}
