import { IReviewReceived, IReviewParsed } from 'commons/types';

/**
 * Parsing review content into object.
 * Since review can be retrieved only from the server its valid format is guaranteed.
 */
export const parseReviewContent = (review: IReviewReceived): IReviewParsed => ({
  ...review,
  ...JSON.parse(review.content),
  content: undefined
});
