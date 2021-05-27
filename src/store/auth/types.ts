import * as utilityTypes from 'utils/typing/utility';

export const SET_IS_AUTHORIZED = 'SET_IS_LOGGED_IN';

export interface AuthState {
  isAuthorized: utilityTypes.Nullable<boolean>;
}

export interface SetIsAuthorized {
  type: typeof SET_IS_AUTHORIZED;
  payload: boolean;
}

export type AuthActionType = SetIsAuthorized;
