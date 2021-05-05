import * as GeneralTypes from 'utils/typing/general';
import * as ApiResponses from 'utils/typing/apiResponses';

export interface IStateProps {
  currentProfileInfo: GeneralTypes.AppProfileInfo;
}

export interface IOwnProps {
  onProceed(collectedInfo: ApiResponses.RegistrationDto): void;
}

export type IProps = IStateProps & IOwnProps;
