import { ISearchedProfile } from 'commons/types';

export interface IOwnProps {
  observedUserData: ISearchedProfile;
  isDemoUser?: boolean;
}

export interface IStateProps {}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
