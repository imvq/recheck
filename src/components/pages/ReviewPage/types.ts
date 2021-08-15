import * as generalTypes from 'commons/types/general';
import { MainToolbarEntry } from 'commons/utils/enums';

export interface IStateProps {
  currentProfileInfo: generalTypes.IAppProfileInfo;
  requestedUserShareableId: string | null;
  reviewData: Omit<generalTypes.IReviewData, 'authorId'>;
}

export interface IDispatchProps {
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
  createReview(reviewData: generalTypes.IReviewData): void;
  setTargetShareableId(id: string): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
