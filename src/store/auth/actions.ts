import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import Api from 'utils/api';
import controlledHistory from 'utils/routing';
import { mapProfileDtoToState } from 'utils/functions';
import { cookieManager, cookiesList } from 'utils/cookies';
import { LinkedInProfileDto, FacebookProfileDto } from 'utils/types.common';
import { setCurrentProfileInfo } from '../profile/actions';
import { AppActionType } from '../types';
import { AuthActionType, SET_IS_AUTHORIZED } from './types';

export const setIsAuthorized = (isAuthorized: boolean): AuthActionType => ({
  type: SET_IS_AUTHORIZED,
  payload: isAuthorized
});

/**
 * Do stuff on LinkedIn or Facebook profile info got through the API.
 */
function onProfileDataRetrieved(
  dispatch: Dispatch<AppActionType>,
  profileResponse: AxiosResponse<LinkedInProfileDto | FacebookProfileDto>
) {
  const normalizedProfileInfo = mapProfileDtoToState(profileResponse.data);
  dispatch(setCurrentProfileInfo(normalizedProfileInfo));

  Api.checkIsRegistered(normalizedProfileInfo.currentId)
    .then((checkResponse) => {
      if (checkResponse.data.isRegistered) {
        dispatch(setIsAuthorized(true));
      } else {
        // Register the user if it is not registered in our app yet.
        controlledHistory.push('/register');
      }
    })
    .catch(() => dispatch(setIsAuthorized(false)));
}

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
