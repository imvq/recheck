import { ICompanyWithMembers, ISearchedProfile } from 'commons/types';

export interface IOwnProps {
  companies: ICompanyWithMembers[];
  setUserSearchResults(results: ISearchedProfile[]): void;
}

export type IProps = IOwnProps;
