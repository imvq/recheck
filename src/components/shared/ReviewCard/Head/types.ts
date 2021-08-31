import { IReviewCardGotData, IReviewCardLeftData } from 'commons/types/general';

export interface IOwnProps {
  reviewCardData: IReviewCardGotData | IReviewCardLeftData;
}

export type IProps = IOwnProps;
