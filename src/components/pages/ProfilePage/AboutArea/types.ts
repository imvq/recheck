import * as GeneralTypes from 'utils/typing/general';

export interface IOwnProps {
  reviewCardData: GeneralTypes.ReviewCardDataFull;
}

export interface IStateProps {
  isLoading: boolean;
}

export type IProps = IOwnProps & IStateProps;
