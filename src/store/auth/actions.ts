import axios from 'axios';
import { Dispatch } from 'redux';

import { AppActionType } from '../types';
import { AuthActionType, SET_IS_AUTHORIZED } from './types';

// ============= Action creators =============

export const setIsAuthorized = (isAuthorized: boolean)
  : AuthActionType => ({
  type: SET_IS_AUTHORIZED,
  payload: isAuthorized
});

// ============= Thunk creators ==============

export const checkAuthorization = () => (
  dispatch: Dispatch<AppActionType>
) => {
  axios.get('https://api.linkedin.com/v2/me')
    .then(() => dispatch(setIsAuthorized(true)))
    .catch(() => dispatch(setIsAuthorized(false)));
};
