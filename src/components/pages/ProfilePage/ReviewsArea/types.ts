import * as utilityTypes from 'utils/typing/utility';
import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  currentPorfileId: string;
  isLoading: boolean;
  reviewsLeftChunksAmount: number;
  currentReviewCardData: utilityTypes.Nullable<generalTypes.ReviewCardLeftData>;
}

export interface IDispatchProps {
  loadTabData: (profileId: string) => void;
  loadNthReview: (profileId: string, nthReview: number) => void;
}

export type IProps = IStateProps & IDispatchProps;
