import { IReviewReceived } from 'commons/types';

export interface IOwnProps {}

export interface IStateProps {
  privateToken: string | null;
  observedReviewsAmount: number;
  currentReviewData: IReviewReceived | null;
}

export interface IDispatchProps {
  loadPageData: (profileId: string, targetShareableId: string) => void;
  loadNthReview: (profileId: string, targetShareableId: string, nthReview: number) => void;
  setCurrentObservedReview(review: IReviewReceived): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
