import axios from 'axios';
import { Dispatch } from 'redux';

import { cookieManager } from 'tools.common';
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
  if (cookieManager.get('access_token')) {
    axios.get(
      `${process.env.REACT_APP_API}/auth/check`,
      { withCredentials: true }
    )
      .then(() => dispatch(setIsAuthorized(true)))
      .catch(() => dispatch(setIsAuthorized(false)));
  } else {
    dispatch(setIsAuthorized(false));
  }
};
