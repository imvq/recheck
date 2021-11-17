import { IReceivedReviewData } from 'commons/types';

export interface IOwnProps {}

export interface IStateProps {
  privateToken: string | null;
  shareableId: string | null;
  isLoading: boolean;
  receivedReviewsAmount: number;
  currentReviewData: IReceivedReviewData | null;
}

export interface IDispatchProps {
  loadTabData: (profileId: string) => void;
  loadNthReview: (profileId: string, nthReview: number) => void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
