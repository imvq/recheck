import { IReviewCardGotData } from 'commons/types/general';

export interface IStateProps {
  currentProfileId: string;
  currentShareableId: string;
  isLoading: boolean;
  reviewsGotChunksAmount: number;
  currentReviewCardData: IReviewCardGotData | null;
}

export interface IDispatchProps {
  loadTabData: (profileId: string) => void;
  loadNthReview: (profileId: string, nthReview: number) => void;
}

export type IProps = IStateProps & IDispatchProps;
