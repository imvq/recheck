import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  reviewCardData: generalTypes.ReviewCardGotData;
  showTarget?: boolean;
}

export type IProps = IOwnProps;
