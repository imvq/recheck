import { Dispatch } from 'redux';

import Api from 'utils/api';
import { onProfileDataRetrieved } from 'utils/functions';
import { cookieManager, cookiesList } from 'utils/cookies';
import { AppActionType } from '../types';
import { AuthActionType, SET_IS_AUTHORIZED } from './types';

export const setIsAuthorized = (isAuthorized: boolean): AuthActionType => ({
  type: SET_IS_AUTHORIZED,
  payload: isAuthorized
});

export const checkAuthorization = () => (dispatch: Dispatch<AppActionType>) => {
  if (cookieManager.get(cookiesList.accessTokenLinkedIn)) {
    Api.getProfileLinkedIn()
      .then(profileResponse => onProfileDataRetrieved(dispatch, profileResponse))
      .catch(() => dispatch(setIsAuthorized(false)));
  } else if (cookieManager.get(cookiesList.accessTokenFacebook)) {
    Api.getProfileFacebook()
      .then(profileResponse => onProfileDataRetrieved(dispatch, profileResponse))
      .catch(() => dispatch(setIsAuthorized(false)));
  } else {
    dispatch(setIsAuthorized(false));
  }
};
