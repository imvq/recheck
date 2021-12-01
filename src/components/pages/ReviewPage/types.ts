import { IReviewCreated, IReviewCreator } from 'commons/types';

export interface IOwnProps {}

export interface IStateProps {
  isAuthenticated: boolean | null;
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
  setIsRedirectHomePending(flag: boolean): void;
  setIsLoginPopupVisible(flag: boolean): void;
  setIsPageLocked(flag: boolean): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
