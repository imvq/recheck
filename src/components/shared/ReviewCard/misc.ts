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

export function getFormattedDate(dateString: string) {
  const date = new Date(dateString);

  const month = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
  ][date.getMonth()];

  const year = date.getFullYear();
  const yearRepr = year === new Date().getFullYear() ? '' : ` ${year}`;

  return `${date.getDay()} ${month}${yearRepr}`;
}
