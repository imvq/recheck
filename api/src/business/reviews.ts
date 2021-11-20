import { Request, Response } from 'express';

import * as accessors from '@business/database/accessors';
import * as mappers from '@business/database/mappers';
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
  const existingReview = await accessors.readReview(author.id, targetShareableId);

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
  interface IPathParams {
    privateToken: string;
  }

  const { privateToken }: IPathParams = request.params as { privateToken: string; };
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
  interface IPathParams {
    privateToken: string;
  }

  const { privateToken }: IPathParams = request.params as { privateToken: string; };
  assertBodyData(privateToken);

  const author = await accessors.readUserByPrivateToken(privateToken);
  const amount = await accessors.readLeftReviewsAmount(author.id);

  reply(response, { result: +amount });
}

/**
 * Get n-th of the reviews received by asker.
 */
export async function getNthReceivedReview(request: Request, response: Response) {
  interface IPathParams {
    privateToken: string;
    n: string;
  }

  const { privateToken, n }: IPathParams = request.params as { privateToken: string; n: string; };
  assertBodyData(privateToken, n);

  const reviews = await accessors.readReceivedReviews(privateToken) || [];

  if (reviews.length <= parseInt(n)) {
    throw new errors.NotFoundError(`No review with index ${n}.`);
  }

  const review = mappers.normalizeReviewWithTarget(reviews[parseInt(n)]);
  reply(response, review);
}

/**
 * Get n-th of the reviews left by asker.
 */
export async function getNthLeftReview(request: Request, response: Response) {
  interface IPathParams {
    privateToken: string;
    n: string;
  }

  const { privateToken, n }: IPathParams = request.params as { privateToken: string; n: string; };
  assertBodyData(privateToken, n);

  const reviews = await accessors.readLeftReviews(privateToken) || [];

  if (reviews.length <= parseInt(n)) {
    throw new errors.NotFoundError(`No review with index ${n}.`);
  }

  const review = mappers.normalizeReviewWithTarget(reviews[parseInt(n)]);
  reply(response, review);
}

/**
 * Check if a user can leave a review to another one.
 */
export async function checkIfUserIsAvailableForReview(request: Request, response: Response) {
  interface IBodyParams {
    privateToken: string;
    targetShareableId: string;
  }

  const { privateToken, targetShareableId }: IBodyParams = request.body;
  assertBodyData(privateToken, targetShareableId);

  const author = await accessors.readUserByPrivateToken(privateToken);
  const review = await accessors.readReview(author.id, targetShareableId);

  reply(response, { success: !review });
}
