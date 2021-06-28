import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  companyData: generalTypes.Company;
  setCurrentMembers(members: generalTypes.UserCardData[]): void;
}

export type IProps = IOwnProps;
