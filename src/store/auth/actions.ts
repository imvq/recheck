import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import Api from 'utils/api';
import controlledHistory from 'utils/routing';
import { mapProfileDtoToState } from 'utils/functions';
import { cookieManager, cookiesList } from 'utils/cookies';
import * as ApiResponses from 'utils/typing/apiResponses';
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
  profileResponse: AxiosResponse<ApiResponses.LinkedInProfileDto | ApiResponses.FacebookProfileDto>
) {
  const normalizedProfileInfo = mapProfileDtoToState(profileResponse.data);
  dispatch(setCurrentProfileInfo(normalizedProfileInfo));

  // Check user existence.
  Api.checkIsRegistered(normalizedProfileInfo.currentId)
    .then((checkResponse) => {
      if (checkResponse.data.isRegistered) {
        // If the user exists, check if it is confirmed.
        Api.checkIsConfirmed(normalizedProfileInfo.currentId)
          .then((confirmationResponse) => {
            if (confirmationResponse.data.isConfirmed) {
              dispatch(setIsAuthorized(true));
            } else {
              controlledHistory.push('/await-user-confirmation');
            }
          })
          .catch(() => dispatch(setIsAuthorized(false)));
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
