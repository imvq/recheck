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
}

export interface IDispatchProps {
  setPageLocked(): void;
  setEmail(email: string): void;
}

export type IProps = IStateProps & IDispatchProps;
