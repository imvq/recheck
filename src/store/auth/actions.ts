import axios from 'axios';
import { Dispatch } from 'redux';

import { cookieManager } from 'utils/cookies';
import { mapProfileDtoToState } from 'utils/functions';
import { AppActionType } from '../types';
import { AuthActionType, SET_IS_AUTHORIZED, SET_IS_REGISTERED } from './types';
import { setCurrentProfileInfo } from '../profile/actions';

export const setIsAuthorized = (isAuthorized: boolean)
  : AuthActionType => ({
  type: SET_IS_AUTHORIZED,
  payload: isAuthorized
});

export const setIsRegistered = (isRegistered: boolean)
  : AuthActionType => ({
  type: SET_IS_REGISTERED,
  payload: isRegistered
});

export const checkAuthorization = () => (dispatch: Dispatch<AppActionType>) => {
  if (cookieManager.get('BEARER')) {
    axios.get(
      `${process.env.REACT_APP_API}/user/profile`,
      { withCredentials: true }
    )
      .then((profileResponse) => {
        const normalizedProfileInfo = mapProfileDtoToState(profileResponse.data);
        dispatch(setCurrentProfileInfo(normalizedProfileInfo));
        dispatch(setIsAuthorized(true));
        dispatch(setIsRegistered(profileResponse.data.isRegistered));
      })
      .catch(() => dispatch(setIsAuthorized(false)));
  } else {
    dispatch(setIsAuthorized(false));
  }
};
