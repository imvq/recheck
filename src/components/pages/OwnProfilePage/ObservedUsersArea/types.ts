import { ISearchedProfile } from 'commons/types';

export interface IOwnProps {}

export interface IStateProps {
  privateToken: string | null;
  observedUsers: ISearchedProfile[];
}

export interface IDispatchProps {
  setIsPageLocked(flag: boolean): void;
  loadObservedUsers(
    privateToken: string, last: number, finalie: () => void, recreate?: boolean
  ): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
