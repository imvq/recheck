import { Nullable } from 'types.common';

export const SET_IS_AUTHORIZED = 'SET_IS_LOGGED_IN';

export type AuthState = {
  isAuthorized: Nullable<boolean>;
};

export type SetAuthState = {
  type: typeof SET_IS_AUTHORIZED;
  payload: boolean;
};

export type AuthActionType = SetAuthState;