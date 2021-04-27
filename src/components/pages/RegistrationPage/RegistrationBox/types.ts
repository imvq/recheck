import { AppProfileInfo, RegistrationDto } from 'utils/types.common';

export interface IStateProps {
  currentProfileInfo: AppProfileInfo;
}

export interface IOwnProps {
  onProceed(collectedInfo: RegistrationDto): void;
}

export type IProps = IStateProps & IOwnProps;
