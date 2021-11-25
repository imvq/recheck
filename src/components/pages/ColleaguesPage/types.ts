import { ISearchedProfile, ISearchedProfileBasic } from 'commons/types';

export interface IOwnProps {}

export interface IStateProps {
  privateToken: string | null;
  colleaguesState: {
    colleagues: ISearchedProfile[];
    areLoaded: boolean;
  }
}

export interface IDispatchProps {
  setColleagues(colleagues: ISearchedProfileBasic[]): void;
  lockPage(): void;
  unlockPage(): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
