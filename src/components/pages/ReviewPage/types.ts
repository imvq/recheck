import { IAppProfileInfo, IReviewData } from 'commons/types/general';
import { MainToolbarEntry } from 'commons/types/unions';

export interface IStateProps {
  currentProfileInfo: IAppProfileInfo;
  requestedUserShareableId: string | null;
  reviewData: Omit<IReviewData, 'authorId'>;
}

export interface IDispatchProps {
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
  createReview(reviewData: IReviewData): void;
  setTargetShareableId(id: string): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
