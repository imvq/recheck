import { Request, Response } from 'express';

import * as accessors from '@business/database/accessors';

import { assertBodyData, reply } from '@business/commons';

export async function prepareReview(request: Request, response: Response) {
  interface IBodyParams {
    privateToken: string;
    targetShareableId: string;
    reviewContent: string;
  }

  const { privateToken, targetShareableId, reviewContent }: IBodyParams = request.body;
  assertBodyData(privateToken, targetShareableId, reviewContent);

  // TODO: create review.
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

  reply(response, { result: amount });
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

  reply(response, { result: amount });
}
