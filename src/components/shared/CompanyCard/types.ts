import { ICompanyWithMembers, ISearchedProfile } from 'commons/types';

export interface IOwnProps {
  companyData: ICompanyWithMembers;
  setCurrentMembers(members: ISearchedProfile[]): void;
}

export interface IStateProps {}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
