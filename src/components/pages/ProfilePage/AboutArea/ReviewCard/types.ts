import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  reviewCardData: generalTypes.ReviewCardGotData;
  isAnonymous?: boolean;
}

export type IProps = IOwnProps;
