import { ReactFacebookLoginInfo, ReactFacebookFailureResponse } from 'react-facebook-login';

import Api from 'utils/api';
import * as constants from 'utils/constants';
import { Optional, ProfileInfo } from 'utils/types.common';
import { mapProfileDtoToState } from 'utils/functions';
import { cookieManager, cookiesList } from 'utils/cookies';

export function onError(setIsAuthorizedCallback: (flag: boolean) => void) {
  setIsAuthorizedCallback(false);
  window.location.replace(window.location.origin);
}

export function onSuccessLinkedIn(
  code: string,
  setIsLoginPopupVisibleCallback: (flag: boolean) => void,
  setIsAuthorizedCallback: (flag: boolean) => void,
  setCurrentProfileInfoCallback: (profileInfo: ProfileInfo) => void
) {
  Api.confirmAuthLinkedIn(code)
    .then(confirmationResponse => {
      // Save OAuth bearer token to cookies.
      const tokenExpiration = new Date(Date.now() + constants.MONTH_MS * 2);
      cookieManager.set(
        cookiesList.accessTokenLinkedIn,
        confirmationResponse.data[cookiesList.accessTokenLinkedIn],
        { path: '/', expires: tokenExpiration }
      );

      Api.getProfileLinkedIn()
        .then(profileResponse => {
          const isRegistered = profileResponse.data.isRegistered as boolean;
          const normalizedProfileInfo = mapProfileDtoToState(profileResponse.data);
          setCurrentProfileInfoCallback(normalizedProfileInfo);

          // Register the user if it is not registered in our app yet.
          if (!isRegistered) {
            Api.registerProfile(normalizedProfileInfo.currentId)
              .then(() => {
                setCurrentProfileInfoCallback(normalizedProfileInfo);
                setIsAuthorizedCallback(true);
                setIsLoginPopupVisibleCallback(false);
              })
              .catch(() => setIsAuthorizedCallback(false));
          } else {
            setCurrentProfileInfoCallback(normalizedProfileInfo);
            setIsAuthorizedCallback(true);
            setIsLoginPopupVisibleCallback(false);
          }
        }).catch(() => onError(setIsAuthorizedCallback));
    }).catch(() => onError(setIsAuthorizedCallback));
}

function isFacebookFailureResponse(result: ReactFacebookLoginInfo | ReactFacebookFailureResponse)
  : result is ReactFacebookFailureResponse {
  // 'status' is a field of ReactFacebookFailureResponse type.
  return !!((result as ReactFacebookFailureResponse).status as Optional<string>);
}

export function onSuccessFacebook(
  result: ReactFacebookLoginInfo | ReactFacebookFailureResponse,
  setIsLoginPopupVisibleCallback: (flag: boolean) => void,
  setIsAuthorizedCallback: (flag: boolean) => void,
  setCurrentProfileInfoCallback: (profileInfo: ProfileInfo) => void
) {
  if (!isFacebookFailureResponse(result)) {
    const oauthData = result as ReactFacebookLoginInfo;
    const profileInfo: ProfileInfo = {
      currentId: oauthData.userID,
      currentName: oauthData.name || '',
      currentEmail: oauthData.email || '',
      currentPhotoUrl: oauthData.picture?.data.url || ''
    };

    setCurrentProfileInfoCallback(profileInfo);
    setIsLoginPopupVisibleCallback(false);
    setIsAuthorizedCallback(true);
  }
}
