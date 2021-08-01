import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  companyData: generalTypes.ICompany;
  setCurrentMembers(members: generalTypes.ISearchProfileInfo[]): void;
}

export type IProps = IOwnProps;
