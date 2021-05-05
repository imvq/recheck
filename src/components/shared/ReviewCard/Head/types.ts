import * as GeneralTypes from 'utils/typing/general';

export interface IOwnProps {
  reviewCardData: GeneralTypes.ReviewCardDataFull;
  isAnonymous?: boolean;
}

export type IProps = IOwnProps;
