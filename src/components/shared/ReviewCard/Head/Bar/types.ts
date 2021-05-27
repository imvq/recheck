import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  reviewCardData: generalTypes.ReviewCardDataFull;
  isAnonymous?: boolean;
}

export type IProps = IOwnProps;
