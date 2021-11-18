import { IReviewCreated, IReviewCreator } from 'commons/types';
import { MainToolbarEntry } from 'commons/types/unions';

export interface IOwnProps {}

export interface IStateProps {
  isAuthorized: boolean | null;
  isPageLocked: boolean;
  privateToken: string | null;
  requestedUserShareableId: string | null;
  reviewData: Omit<IReviewCreated, 'targetShareableId'>;
}

export interface IDispatchProps {
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
  setCurrentReviewTargetShareableId(shareableId: string): void;
  createReview: IReviewCreator;
  setIsLoginPopupVisible(flag: boolean): void;
  lockPage(): void;
  unlockPage(): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
