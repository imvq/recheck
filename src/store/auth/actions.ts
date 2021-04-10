import axios from 'axios';
import { Dispatch } from 'redux';

import { cookieManager } from 'utils/cookies';
import { mapProfileDtoToState } from 'utils/functions';
import { AppActionType } from '../types';
import { AuthActionType, SET_IS_AUTHORIZED } from './types';
import { setCurrentProfileInfo } from '../profile/actions';

export const setIsAuthorized = (isAuthorized: boolean)
  : AuthActionType => ({
  type: SET_IS_AUTHORIZED,
  payload: isAuthorized
});

export const checkAuthorization = () => (dispatch: Dispatch<AppActionType>) => {
  if (cookieManager.get('BEARER')) {
    axios.get(
      `${process.env.REACT_APP_API}/user/profile`,
      { withCredentials: true }
    )
      .then((profileResponse) => {
        const normalizedProfileInfo = mapProfileDtoToState(profileResponse.data);
        const isRegistered = profileResponse.data.isRegistered as boolean;
        dispatch(setCurrentProfileInfo(normalizedProfileInfo));
        dispatch(setIsAuthorized(true));

        const apiBase = process.env.REACT_APP_API;
        const apiNewUserPath = `${apiBase}/auth/register`;

        // Register the user if it is not registered in our app yet.
        if (isRegistered) {
          axios.post(apiNewUserPath, { profileId: normalizedProfileInfo.currentId });
        }
      })
      .catch(() => dispatch(setIsAuthorized(false)));
  } else {
    dispatch(setIsAuthorized(false));
  }
};
