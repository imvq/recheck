import * as GeneralTypes from 'utils/typing/general';

export interface IStateProps {
  currentProfileInfo: GeneralTypes.AppProfileInfo;
  reviewData: Omit<GeneralTypes.ReviewData, 'authorId'>;
}

export interface IDispatchProps {
  createReview(reviewData: GeneralTypes.ReviewData): void;
}

export type IProps = IStateProps & IDispatchProps;
