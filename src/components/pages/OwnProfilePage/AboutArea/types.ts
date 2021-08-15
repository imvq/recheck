import * as generalTypes from 'commons/types/general';

export interface IStateProps {
  currentPorfileId: string;
  currentShareableId: string;
  isLoading: boolean;
  reviewsGotChunksAmount: number;
  currentReviewCardData: generalTypes.IReviewCardGotData | null;
}

export interface IDispatchProps {
  loadTabData: (profileId: string) => void;
  loadNthReview: (profileId: string, nthReview: number) => void;
}

export type IProps = IStateProps & IDispatchProps;
