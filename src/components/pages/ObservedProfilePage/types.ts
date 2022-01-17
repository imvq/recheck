import { IReviewReceived } from 'commons/types';

export interface IStateProps {
  privateToken: string | null;
  isConfirmed: boolean | null;
  isLoading: boolean;
  isObservedReviewsPageLoading: boolean;
  observedReviewsChunksAmount: number;
  currentReviewCardData: IReviewReceived | null;
}

export interface IDispatchProps {
  loadObservedReviewsData(askerProfileId: string, targetShareableId: string): void;
  loadNthReview: (askerProfileId: string, targetShareableId: string, nthReview: number) => void;
  setIsLoading(): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
