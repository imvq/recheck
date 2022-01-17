import { ISearchedProfile } from 'commons/types';

export const SET_OBSERVED_USERS = 'SET_OBSERVED_USERS';
export const APPEND_OBSERVED_USERS = 'APPEND_OBSERVED_USERS';
export const SET_CURRENT_OBSERVED_USER = 'SET_CURRENT_OBSERVED_USER';

export interface IState {
  observedUsers: ISearchedProfile[],
  currentObservedUser: ISearchedProfile | null;
}

export interface SetObservedUsers {
  type: typeof SET_OBSERVED_USERS;
  payload: ISearchedProfile[];
}

export interface AppendObservedUsers {
  type: typeof APPEND_OBSERVED_USERS;
  payload: ISearchedProfile[];
}

export interface SetCurrentObservedUser {
  type: typeof SET_CURRENT_OBSERVED_USER;
  payload: ISearchedProfile;
}

export type IAction =
    SetObservedUsers
  | AppendObservedUsers
  | SetCurrentObservedUser;
