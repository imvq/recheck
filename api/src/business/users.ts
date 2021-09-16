import { Request, Response } from 'express';

import * as accessors from '@business/database/accessors';

import { database } from '@business/preloaded';
import { assertBodyData, reply } from '@business/utilities';

export function checkIfUserIsRegistered(request: Request, response: Response) {}

export async function checkIfEmailIsAvailable(request: Request, response: Response) {
  interface IBodyParams {
    email: string;
  }

  const { email }: IBodyParams = request.body;
  assertBodyData(email);

  const targetedEmail = await database.oneOrNone(accessors.sqlFindEmail, { email });

  reply(response, { message: !targetedEmail });
}

export function prepareUser(request: Request, response: Response) {}
