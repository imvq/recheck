import { IReviewData } from 'commons/types/general';
import { MainToolbarEntry } from 'commons/types/unions';

export interface IStateProps {
  isAuthorized: boolean | null;
  privateToken: string | null;
  requestedUserShareableId: string | null;
  reviewData: Omit<IReviewData, 'authorId'>;
}

export interface IDispatchProps {
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
  createReview(reviewData: IReviewData, callback: () => void): void;
  setIsLoginPopupVisible(flag: boolean): void;
  setTargetShareableId(id: string): void;
  lockPage(): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
