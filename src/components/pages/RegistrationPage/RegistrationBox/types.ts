import * as generalTypes from 'utils/typing/general';

export interface IEmailState {
  email: string,
  isEmailValid: boolean,
  isEmailValidationErrorVisible: boolean,
  // null means the value loading is in progress.
  isEmailAvailabilityErrorVisible: boolean | null
}

export interface IOwnProps {
  onProceed(collectedInfo: generalTypes.PrepareProfileDto): void;
}

export interface IStateProps {
  currentProfileInfo: generalTypes.AppProfileInfo;
  matchedCompanies: generalTypes.CompanyReduced[];
  referral: string | null;
}

export interface IDispatchProps {
  loadMatchedCompanies(sequence: string): void;
  clearMatchedCompanies(): void;
}

export type IProps = IStateProps & IOwnProps & IDispatchProps;
