import * as generalTypes from 'commons/types/general';

export interface IOwnProps {
  companyData: generalTypes.ICompany;
  setCurrentMembers(members: generalTypes.ISearchProfileInfo[]): void;
}

export type IProps = IOwnProps;
