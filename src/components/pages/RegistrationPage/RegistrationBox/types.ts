import * as commonTypes from 'commons/types';

export interface IEmailState {
  email: string,
  isEmailValid: boolean,
  isEmailValidationErrorVisible: boolean,
  // null means the value loading is in progress.
  isEmailAvailabilityErrorVisible: boolean | null
}

export interface IOwnProps {
  onProceed(collectedInfo: commonTypes.IUserPreparationData): void;
}

export interface IStateProps {
  matchedCompanies: commonTypes.ICompanyReduced[];
  referral: string | null;
}

export interface IDispatchProps {
  loadMatchedCompanies(sequence: string): void;
  clearMatchedCompanies(): void;
}

export type IProps = IStateProps & IOwnProps & IDispatchProps;
