import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  companyData: generalTypes.Company;
  setCurrentMembers(members: generalTypes.SearchProfileInfo[]): void;
}

export type IProps = IOwnProps;
