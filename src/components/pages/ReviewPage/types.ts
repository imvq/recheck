import { ReviewData } from 'utils/types.common';

export interface IStateProps {
  reviewData: ReviewData
}

export interface IDispatchProps {
  createReview(reviewData: ReviewData): void;
}

export type IProps = IStateProps & IDispatchProps;
