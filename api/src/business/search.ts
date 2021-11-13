import { Request, Response } from 'express';

import * as accessors from '@business/database/accessors';
import * as mappers from '@business/database/mappers';
import * as errors from '@business/errors';

import { database } from '@business/preloaded';
import { assertBodyData, reply } from '@business/utilities';

export async function searchUserByShareableId(request: Request, response: Response) {
  interface IBodyParams {
    shareableId: string;
  }

  const { shareableId }: IBodyParams = request.body;
  assertBodyData(shareableId);

  const targetAccessor = accessors.sqlReadUserByShareableId;
  let targetEntity;

  try {
    targetEntity = await database.oneOrNone(targetAccessor, { shareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }

  const target = mappers.normalizePublicUserEntity(targetEntity);

  reply(response, target);
}
