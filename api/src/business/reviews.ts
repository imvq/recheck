import { Request, Response } from 'express';

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
