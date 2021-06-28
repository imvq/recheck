import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  companyData: generalTypes.Company;
  setCurrentCompany(company: generalTypes.Company): void;
  setCurrentMembers(members: generalTypes.UserCardData[]): void;
}

export type IProps = IOwnProps;
