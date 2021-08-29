import * as constants from 'commons/utils/constants';

import ApiClient from 'commons/externals/ApiClient';

import { IAppProfileInfo } from 'commons/types/general';
import { IRetrievedProfileDto } from 'commons/types/responses/basic';
import { jumpTo, mapProfileDtoToState } from 'commons/utils/misc';
import { cookieManager } from 'commons/utils/services';

function setCookie(name: string, value: string) {
  const tokenExpiration = new Date(Date.now() + constants.MONTH_MS * 2);
  cookieManager.set(name, value, { path: '/', expires: tokenExpiration });
}

export function onError() {
  window.location.replace(window.location.origin);
}

function onProfileDataRetrieved(
  setPageLockedCallback: (flag: boolean) => void,
  setIsLoginPopupVisibleCallback: (flag: boolean) => void,
  setIsAuthorizedCallback: (flag: boolean) => void,
  setCurrentProfileInfoCallback: (profileInfo: IAppProfileInfo) => void,
  profileResponse: IRetrievedProfileDto
) {
  const normalizedProfileInfo = mapProfileDtoToState(profileResponse);
  setCurrentProfileInfoCallback(normalizedProfileInfo);

  ApiClient.checkIsRegistered(normalizedProfileInfo.currentId)
    .then((checkResponse) => {
      setIsAuthorizedCallback(true);

      if (checkResponse.data.isRegistered) {
        ApiClient.checkIsConfirmed(normalizedProfileInfo.currentId)
          .then((confirmationResponse) => {
            setIsLoginPopupVisibleCallback(false);

            if (!confirmationResponse.data.isConfirmed) {
              jumpTo('/await-user-confirmation');
            }
          })
          .catch(() => setIsAuthorizedCallback(false));
      } else {
        // Unlock the page and forward the user to
        // registration page if it is not registered in our app yet.
        setPageLockedCallback(false);
        jumpTo('/register');
      }
    })
    .catch(() => setIsAuthorizedCallback(false));
}

export function onSuccessLinkedIn(
  code: string,
  setPageLockedCallback: (flag: boolean) => void,
  setIsLoginPopupVisibleCallback: (flag: boolean) => void,
  setIsAuthorizedCallback: (flag: boolean) => void,
  setCurrentProfileInfoCallback: (profileInfo: IAppProfileInfo) => void
) {
  // Lock page to prevent user actions while retrieving and processing profile data.
  setPageLockedCallback(true);

  ApiClient.exchangeLinkedInCode(code)
    // If the code is valid and correct.
    .then(response => {
      // 1. Save OAuth bearer token to cookies.
      setCookie(constants.ACCESS_TOKEN_LINKEDIN, response.data[constants.ACCESS_TOKEN_LINKEDIN]);

      // 2. Time to get basic profile info from LinkedIn
      // and register the user if it is not yet registered.
      ApiClient.getProfileLinkedIn()
        .then(profileResponse => onProfileDataRetrieved(
          setPageLockedCallback,
          setIsLoginPopupVisibleCallback,
          setIsAuthorizedCallback,
          setCurrentProfileInfoCallback,
          profileResponse.data
        ))
        .catch(onError);
    }).catch(onError)
    // Unlock the page in the end.
    .finally(() => setPageLockedCallback(false));
}
