import { IReviewCardGotData, IReviewCardLeftData } from 'utils/typing/general';

export interface IOwnProps {
  reviewCardData: IReviewCardGotData | IReviewCardLeftData;
  showTarget?: boolean;
}

export type IProps = IOwnProps;
