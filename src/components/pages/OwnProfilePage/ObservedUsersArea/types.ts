import { ISearchedProfile } from 'commons/types';

export interface IOwnProps {}

export interface IStateProps {
  privateToken: string | null;
  observedUsers: ISearchedProfile[];
}

export interface IDispatchProps {
  setIsPageLocked(flag: boolean): void;
  loadObservedUsers(
    privateToken: string, last: number, finalize: (newLast: number) => void, recreate?: boolean
  ): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
