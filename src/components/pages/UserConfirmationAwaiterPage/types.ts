export interface IEmailState {
  email: string,
  isEmailValid: boolean,
  isEmailValidationErrorVisible: boolean,
  // null means the value loading is in progress.
  isEmailAvailabilityErrorVisible: boolean | null
}

export interface IStateProps {
  email: string | null;
  privateToken: string | null;
  isRedirectedFromOrigin: boolean;
}

export interface IDispatchProps {
  setIsPageLocked(flag: boolean): void;
  setEmail(email: string): void;
  setIsRedirectedFromOrigin(flag: boolean): void;
}

export type IProps = IStateProps & IDispatchProps;
