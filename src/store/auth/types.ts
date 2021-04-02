import { Nullable } from 'utils/types.common';

export const SET_IS_AUTHORIZED = 'SET_IS_LOGGED_IN';

export interface AuthState {
  isAuthorized: Nullable<boolean>;
}

export interface SetAuthState {
  type: typeof SET_IS_AUTHORIZED;
  payload: boolean;
}

export type AuthActionType = SetAuthState;
