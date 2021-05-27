import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  reviewCardData: generalTypes.ReviewCardDataFull;
}

export interface IStateProps {
  isLoading: boolean;
}

export type IProps = IOwnProps & IStateProps;
