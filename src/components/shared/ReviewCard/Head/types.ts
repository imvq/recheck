import { IReviewCardGotData, IReviewCardLeftData } from 'commons/types/general';

export interface IOwnProps {
  reviewCardData: IReviewCardGotData | IReviewCardLeftData;
  showTarget?: boolean;
}

export type IProps = IOwnProps;
