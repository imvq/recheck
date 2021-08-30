import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import * as apiResponsesBasic from 'commons/types/responses/basic';
import * as constants from 'commons/utils/constants';

import { jumpTo, mapProfileDtoToState } from 'commons/utils/misc';
import { apiClient, cookieManager } from 'commons/utils/services';

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
  profileResponse: AxiosResponse<apiResponsesBasic.IRetrievedProfileDto>,
  isRedirectOnRegistered: boolean,
  isConfirmationCheckNeeded: boolean
) {
  const normalizedProfileInfo = mapProfileDtoToState(profileResponse.data);
  dispatch(setCurrentProfileInfo(normalizedProfileInfo));

  // Check user existence.
  apiClient.checkIsRegistered(normalizedProfileInfo.currentId)
    .then((checkResponse) => {
      if (checkResponse.data.isRegistered) {
        // No need for registered users to be at registration page.
        if (isRedirectOnRegistered) {
          jumpTo('/');
          return;
        }

        // Provide confirmation check only if it is supposed to be.
        if (isConfirmationCheckNeeded) {
          // If the user exists, check if it is confirmed.
          apiClient.checkIsConfirmed(normalizedProfileInfo.currentId)
            .then(confirmationResponse => {
              if (confirmationResponse.data.isConfirmed) {
                dispatch(setIsAuthorized(true));
                return;
              }

              jumpTo('/await-user-confirmation');
            })
            .catch(() => dispatch(setIsAuthorized(false)));
        } else {
          // If no confirmation needed, then mark user as authorized immediately.
          dispatch(setIsAuthorized(true));
        }
      } else {
        // Register the user if it is not registered in our app yet.
        dispatch(setIsAuthorized(true));
        jumpTo('/register');
      }
    })
    .catch(() => dispatch(setIsAuthorized(false)));
}

export const checkAuthorization = (
  isRedirectOnRegistered: boolean,
  isConfirmationCheckNeeded: boolean
) => (
  dispatch: Dispatch<AppActionType>
) => {
  if (cookieManager.get(constants.ACCESS_TOKEN_LINKEDIN)) {
    apiClient.getProfileLinkedIn()
      .then(profileResponse => onProfileDataRetrieved(
        dispatch,
        profileResponse,
        isRedirectOnRegistered,
        isConfirmationCheckNeeded
      ))
      .catch(() => dispatch(setIsAuthorized(false)));

    return;
  }

  dispatch(setIsAuthorized(false));
};
