import {
  AuthActionType,
  SET_IS_AUTHORIZED
} from './types';

export const createSetIsAuthorizedAC = (isAuthorized: boolean)
  : AuthActionType => ({
  type: SET_IS_AUTHORIZED,
  payload: isAuthorized
});
