import { AuthState, AuthActionType, SET_IS_AUTHORIZED } from './types';

const initialState: AuthState = {
  isAuthorized: null
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
    default:
      return state;
  }
}
