import { IReviewCardCommonData } from 'commons/types/general/basic';

export function mapReviewToArray(from: IReviewCardCommonData) {
  return [
    ['', from.tasks],
    ['', from.strengths],
    [`Оценка: ${from.recommendationMark}`, from.recommendation]
  ];
}
