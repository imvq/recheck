import { ReviewCardDataFull } from 'utils/types.common';

export interface IOwnProps {
  reviewCardData: ReviewCardDataFull;
  isAnonymous?: boolean;
}

export type IProps = IOwnProps;
