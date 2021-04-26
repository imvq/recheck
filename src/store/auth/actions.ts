import { Dispatch } from 'redux';

import Api from 'utils/api';
import { cookieManager, cookiesList } from 'utils/cookies';
import { mapLinkedInProfileDtoToState } from 'utils/functions';
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
        const normalizedProfileInfo = mapLinkedInProfileDtoToState(profileResponse.data);

        Api.checkIsRegistered(normalizedProfileInfo.currentId)
          .then((checkResponse) => {
            if (checkResponse.data.flag) {
              dispatch(setCurrentProfileInfo(normalizedProfileInfo));
              dispatch(setIsAuthorized(true));
            } else {
              // Register the user if it is not registered in our app yet.
              window.location.replace(`${window.location.origin}/register`);
            }
          });
      }).catch(() => dispatch(setIsAuthorized(false)));
  } else {
    dispatch(setIsAuthorized(false));
  }
};
