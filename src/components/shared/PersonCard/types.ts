import { ISearchedProfile } from 'commons/types';

export interface IOwnProps {
  buttonText: string;
  onButtonClick(): void;
  userData: ISearchedProfile;
}

export interface IStateProps {}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
