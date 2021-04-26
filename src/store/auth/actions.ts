import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import Api from 'utils/api';
import { LinkedInProfileDto, FacebookProfileDto } from 'utils/types.common';
import { cookieManager, cookiesList } from 'utils/cookies';
import { mapProfileDtoToState } from 'utils/functions';
import { AppActionType } from '../types';
import { AuthActionType, SET_IS_AUTHORIZED } from './types';
import { setCurrentProfileInfo } from '../profile/actions';

export const setIsAuthorized = (isAuthorized: boolean): AuthActionType => ({
  type: SET_IS_AUTHORIZED,
  payload: isAuthorized
});

function onProfileDataRetrieved(
  dispatch: Dispatch<AppActionType>,
  profileResponse: AxiosResponse<LinkedInProfileDto | FacebookProfileDto>
) {
  const normalizedProfileInfo = mapProfileDtoToState(profileResponse.data);

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
}

export const checkAuthorization = () => (dispatch: Dispatch<AppActionType>) => {
  if (cookieManager.get(cookiesList.accessTokenLinkedIn)) {
    Api.getProfileLinkedIn()
      .then(profileResponse => onProfileDataRetrieved(dispatch, profileResponse))
      .catch(() => dispatch(setIsAuthorized(false)));
  } if (cookieManager.get(cookiesList.accessTokenFacebook)) {
    Api.getProfileFacebook()
      .then(profileResponse => onProfileDataRetrieved(dispatch, profileResponse))
      .catch(() => dispatch(setIsAuthorized(false)));
  } else {
    dispatch(setIsAuthorized(false));
  }
};
