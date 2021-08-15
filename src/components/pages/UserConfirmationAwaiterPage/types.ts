import { IAppProfileInfo } from 'commons/types/general';

export interface IEmailState {
  email: string,
  isEmailValid: boolean,
  isEmailValidationErrorVisible: boolean,
  // null means the value loading is in progress.
  isEmailAvailabilityErrorVisible: boolean | null
}

export interface IStateProps {
  currentProfileInfo: IAppProfileInfo;
}

export interface IDispatchProps {
  lockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
