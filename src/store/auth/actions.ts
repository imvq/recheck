import axios from 'axios';
import { Dispatch } from 'redux';

import { cookieManager } from 'utils/cookies';
import { ProfileInfo } from 'utils/types.common';
import { AppActionType } from '../types';
import { AuthActionType, SET_IS_AUTHORIZED } from './types';
import { setCurrentProfileInfo } from '../profile/actions';

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
  if (cookieManager.get('BEARER')) {
    axios.get(
      `${process.env.REACT_APP_API}/user/profile`,
      { withCredentials: true }
    )
      .then((profileResponse) => {
        dispatch(setCurrentProfileInfo(profileResponse.data as ProfileInfo));
        dispatch(setIsAuthorized(true));
      })
      .catch(() => dispatch(setIsAuthorized(false)));
  } else {
    dispatch(setIsAuthorized(false));
  }
};
