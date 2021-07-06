import * as generalTypes from 'utils/typing/general';

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
