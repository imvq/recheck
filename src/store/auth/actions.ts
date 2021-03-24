import { Dispatch } from 'redux';

import { AppActionType } from '../types';
import { AuthActionType, SET_IS_AUTHORIZED } from './types';

// ============= Action creators =============

export const createSetIsAuthorizedAC = (isAuthorized: boolean)
  : AuthActionType => ({
  type: SET_IS_AUTHORIZED,
  payload: isAuthorized
});

// ============= Thunk creators ==============

export const createCheckAuthorizationThunk = () => (
  dispatch: Dispatch<AppActionType>
) => {
  // TODO: Check stuff.
};
