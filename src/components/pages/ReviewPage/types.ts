import * as generalTypes from 'utils/typing/general';
import { MainToolbarEntry } from 'utils/enums';

export interface IStateProps {
  currentProfileInfo: generalTypes.IAppProfileInfo;
  reviewData: Omit<generalTypes.IReviewData, 'authorId'>;
}

export interface IDispatchProps {
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
  createReview(reviewData: generalTypes.IReviewData): void;
  setTargetShareableId(id: string): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
