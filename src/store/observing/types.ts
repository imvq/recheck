import { ISearchedProfile } from 'commons/types';

export const SET_OBSERVED_USERS = 'SET_OBSERVED_USERS';
export const APPEND_OBSERVED_USERS = 'APPEND_OBSERVED_USERS';

export interface IState {
  observedUsers: ISearchedProfile[]
}

export interface SetObservedUsers {
  type: typeof SET_OBSERVED_USERS;
  payload: ISearchedProfile[];
}

export interface AppendObservedUsers {
  type: typeof APPEND_OBSERVED_USERS;
  payload: ISearchedProfile[];
}

export type IAction =
    SetObservedUsers
  | AppendObservedUsers;
