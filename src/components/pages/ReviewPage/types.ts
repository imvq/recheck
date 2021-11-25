import { IReviewCreated, IReviewCreator } from 'commons/types';

export interface IOwnProps {}

export interface IStateProps {
  isConfirmed: boolean | null;
  isPageLocked: boolean;
  privateToken: string | null;
  requestedUserShareableId: string | null;
  reviewData: Omit<IReviewCreated, 'targetShareableId'>;
}

export interface IDispatchProps {
  setCurrentReviewTargetShareableId(shareableId: string): void;
  pushAnswer(comment: string, mark: number | null): void;
  popAnswer(): void
  createReview: IReviewCreator;
  setIsLoginPopupVisible(flag: boolean): void;
  lockPage(): void;
  unlockPage(): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
