import { IReviewCardLeftData } from 'commons/types/general';

export interface IStateProps {
  currentPorfileId: string;
  isAuthorized: boolean | null;
  isLoading: boolean;
  reviewsLeftChunksAmount: number;
  currentReviewCardData: IReviewCardLeftData | null;
}

export interface IDispatchProps {
  loadTabData: (profileId: string) => void;
  loadNthReview: (profileId: string, nthReview: number) => void;
}

export type IProps = IStateProps & IDispatchProps;
