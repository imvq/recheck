import * as GeneralTypes from 'utils/typing/general';

export interface IStateProps {
  reviewData: GeneralTypes.ReviewData
}

export interface IDispatchProps {
  createReview(reviewData: GeneralTypes.ReviewData): void;
}

export type IProps = IStateProps & IDispatchProps;
