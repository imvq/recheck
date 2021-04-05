import {
  AuthState, AuthActionType, SET_IS_AUTHORIZED, SET_IS_REGISTERED
} from './types';

const initialState: AuthState = {
  isAuthorized: null,
  isRegistered: null
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActionType
): AuthState {
  switch (action.type) {
    case SET_IS_AUTHORIZED:
      return {
        ...state,
        isAuthorized: action.payload
      };
    case SET_IS_REGISTERED:
      return {
        ...state,
        isRegistered: action.payload
      };
    default:
      return state;
  }
}
