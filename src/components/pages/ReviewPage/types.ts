import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  currentProfileInfo: generalTypes.AppProfileInfo;
  reviewData: Omit<generalTypes.ReviewData, 'authorId'>;
}

export interface IDispatchProps {
  createReview(reviewData: generalTypes.ReviewData): void;
}

export type IProps = IStateProps & IDispatchProps;
