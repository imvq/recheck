import { IReviewCardGotData } from 'commons/types/general';

export interface IStateProps {
  privateToken: string | null;
  isAuthorized: boolean | null;
  isLoading: boolean;
  isObservedReviewsPageLoading: boolean;
  observedReviewsChunksAmount: number;
  currentReviewCardData: IReviewCardGotData | null;
}

export interface IDispatchProps {
  loadObservedReviewsData(askerProfileId: string, targetShareableId: string): void;
  loadNthReview: (askerProfileId: string, targetShareableId: string, nthReview: number) => void;
  setIsLoading(): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
