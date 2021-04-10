import { Dispatch } from 'redux';

import Api from 'utils/api';
import { cookieManager, cookiesList } from 'utils/cookies';
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
  const userFor = cookieManager.get(cookiesList.accessTokenLinkedIn)
    ? 'linkedin' : cookieManager.get(cookiesList.accessTokenFacebook)
      ? 'facebook' : null;

  // TODO: SN-dependent registration.
  if (userFor) {
    Api.getProfileLinkedIn()
      .then(profileResponse => {
        const normalizedProfileInfo = mapProfileDtoToState(profileResponse.data);
        const isRegistered = profileResponse.data.isRegistered as boolean;

        // Register the user if it is not registered in our app yet.
        if (!isRegistered) {
          Api.registerProfile(normalizedProfileInfo.currentId)
            .then(() => {
              dispatch(setCurrentProfileInfo(normalizedProfileInfo));
              dispatch(setIsAuthorized(true));
            })
            .catch(() => dispatch(setIsAuthorized(false)));
        } else {
          dispatch(setCurrentProfileInfo(normalizedProfileInfo));
          dispatch(setIsAuthorized(true));
        }
      }).catch(() => dispatch(setIsAuthorized(false)));
  } else {
    dispatch(setIsAuthorized(false));
  }
};
