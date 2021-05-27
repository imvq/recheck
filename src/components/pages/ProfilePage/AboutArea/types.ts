import * as utilityTypes from 'utils/typing/utility';
import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  currentPorfileId: string;
  isLoading: boolean;
  currentReviewCardData: utilityTypes.Nullable<generalTypes.ReviewCardGotData>;
}

export interface IDispatchProps {
  loadTabData: (profileId: string) => void;
}

export type IProps = IStateProps & IDispatchProps;
