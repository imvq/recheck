import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  currentPorfileId: string;
  isLoading: boolean;
  reviewsGotChunksAmount: number;
  currentReviewCardData: generalTypes.ReviewCardGotData | null;
}

export interface IDispatchProps {
  loadTabData: (profileId: string) => void;
  loadNthReview: (profileId: string, nthReview: number) => void;
}

export type IProps = IStateProps & IDispatchProps;
