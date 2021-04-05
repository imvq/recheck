import { Nullable } from 'utils/types.common';

export const SET_IS_AUTHORIZED = 'SET_IS_LOGGED_IN';
export const SET_IS_REGISTERED = 'SET_IS_REGISTERED';

export interface AuthState {
  isAuthorized: Nullable<boolean>;
  isRegistered: Nullable<boolean>;
}

export interface SetIsAuthorized {
  type: typeof SET_IS_AUTHORIZED;
  payload: boolean;
}

export interface SetIsRegistered {
  type: typeof SET_IS_REGISTERED;
  payload: boolean;
}

export type AuthActionType = SetIsAuthorized | SetIsRegistered;
