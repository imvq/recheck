export const SET_IS_AUTHORIZED = 'SET_IS_LOGGED_IN';

export interface AuthState {
  isAuthorized: boolean | null;
}

export interface SetIsAuthorized {
  type: typeof SET_IS_AUTHORIZED;
  payload: boolean;
}

export type AuthActionType = SetIsAuthorized;
