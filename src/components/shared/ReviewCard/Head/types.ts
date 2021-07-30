import { ReviewCardGotData, ReviewCardLeftData } from 'utils/typing/general';

export interface IOwnProps {
  reviewCardData: ReviewCardGotData | ReviewCardLeftData;
  showTarget?: boolean;
}

export type IProps = IOwnProps;
