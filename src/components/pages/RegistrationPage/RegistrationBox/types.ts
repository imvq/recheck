import { ICompany, IUserPreparationData } from 'commons/types';

export interface IEmailState {
  email: string,
  isEmailValid: boolean,
  isEmailValidationErrorVisible: boolean,
  // null means the value loading is in progress.
  isEmailAvailabilityErrorVisible: boolean | null
}

export interface IOwnProps {
  onRegisterButtonPressed(collectedInfo: IUserPreparationData): void;
}

export interface IStateProps {
  socialId: string | null;
  photoUrl: string | null;
  matchedCompanies: ICompany[];
  inviter: string | null;
}

export interface IDispatchProps {
  quickSearchCompanies(sequence: string): void;
  clearMatchedCompanies(): void;
  setIsPageLocked(flag: boolean): void;
}

export type IProps = IStateProps & IOwnProps & IDispatchProps;
