import { ISearchedProfile } from 'commons/types';

import * as types from './types';

export const setObservedUsers = (users: ISearchedProfile[]): types.IAction => ({
  type: types.SET_OBSERVED_USERS,
  payload: users
});

export const appendObservedUsers = (users: ISearchedProfile[]): types.IAction => ({
  type: types.APPEND_OBSERVED_USERS,
  payload: users
});

export const setCurrentObservedUser = (user: ISearchedProfile): types.IAction => ({
  type: types.SET_CURRENT_OBSERVED_USER,
  payload: user
});
