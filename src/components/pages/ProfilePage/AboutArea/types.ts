import * as utilityTypes from 'utils/typing/utility';
import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  isLoading: boolean;
  currentReviewCardData: utilityTypes.Nullable<generalTypes.ReviewCardGotData>;
}

export type IProps = IStateProps;
