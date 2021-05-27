import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  currentProfileInfo: generalTypes.AppProfileInfo;
}

export interface IOwnProps {
  onProceed(collectedInfo: generalTypes.PrepareProfileDto): void;
}

export type IProps = IStateProps & IOwnProps;
