import { Request, Response } from 'express';

import * as accessors from '@business/database/accessors';
import * as errors from '@business/errors';

import { assertBodyData, reply } from '@business/commons';

/**
 * Creating a review.
 * One user can create one review for another one user.
 */
export async function createReview(request: Request, response: Response) {
  interface IBodyParams {
    privateToken: string;
    targetShareableId: string;
    content: string;
  }

  const { privateToken, targetShareableId, content }: IBodyParams = request.body;
  assertBodyData(privateToken, targetShareableId, content);

  const author = await accessors.readUserByPrivateToken(privateToken);
  const existingReview = await accessors.readReview(privateToken, targetShareableId);

  if (existingReview) {
    throw new errors.ConflictError('The review already exists');
  }

  await accessors.createReview(author.id, targetShareableId, content);

  reply(response);
}

/**
 * By design, received reviews are shown one per page.
 * To provide pagination buttons the client needs to know the total amount
 * of all the reviews recevied.
 */
export async function getReceivedReviewsAmount(request: Request, response: Response) {
  interface IBodyParams {
    privateToken: string;
  }

  const { privateToken }: IBodyParams = request.params as { privateToken: string; };
  assertBodyData(privateToken);

  const author = await accessors.readUserByPrivateToken(privateToken);
  const amount = await accessors.readReceivedReviewsAmount(author.shareableId);

  reply(response, { result: +amount });
}

/**
 * By design, left reviews are shown one per page.
 * To provide pagination buttons the client needs to know the total amount
 * of all the reviews recevied.
 */
export async function getLeftReviewsAmount(request: Request, response: Response) {
  interface IBodyParams {
    privateToken: string;
  }

  const { privateToken }: IBodyParams = request.params as { privateToken: string; };
  assertBodyData(privateToken);

  const author = await accessors.readUserByPrivateToken(privateToken);
  const amount = await accessors.readLeftReviewsAmount(author.id);

  reply(response, { result: +amount });
}
