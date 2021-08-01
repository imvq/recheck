import * as generalTypes from 'utils/typing/general';

export interface IEmailState {
  email: string,
  isEmailValid: boolean,
  isEmailValidationErrorVisible: boolean,
  // null means the value loading is in progress.
  isEmailAvailabilityErrorVisible: boolean | null
}

export interface IOwnProps {
  onProceed(collectedInfo: generalTypes.IPrepareProfileDto): void;
}

export interface IStateProps {
  currentProfileInfo: generalTypes.IAppProfileInfo;
  matchedCompanies: generalTypes.ICompanyReduced[];
  referral: string | null;
}

export interface IDispatchProps {
  loadMatchedCompanies(sequence: string): void;
  clearMatchedCompanies(): void;
}

export type IProps = IStateProps & IOwnProps & IDispatchProps;
