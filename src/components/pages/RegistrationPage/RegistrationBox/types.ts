import * as GeneralTypes from 'utils/typing/general';

export interface IStateProps {
  currentProfileInfo: GeneralTypes.AppProfileInfo;
}

export interface IOwnProps {
  onProceed(collectedInfo: GeneralTypes.PrepareProfileDto): void;
}

export type IProps = IStateProps & IOwnProps;
