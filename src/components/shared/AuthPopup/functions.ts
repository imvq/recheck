import { ReactFacebookLoginInfo, ReactFacebookFailureResponse } from 'react-facebook-login';

import Api from 'utils/api';
import * as constants from 'utils/constants';
import { Optional, ProfileInfo } from 'utils/types.common';
import { mapProfileDtoToState } from 'utils/functions';
import { cookieManager, cookiesList } from 'utils/cookies';
import { FacebookLoginResponse } from './types';

function setCookie(name: string, value: string) {
  const tokenExpiration = new Date(Date.now() + constants.MONTH_MS * 2);
  cookieManager.set(name, value, { path: '/', expires: tokenExpiration });
}

export function onError() {
  window.location.replace(window.location.origin);
}

export function onSuccessLinkedIn(
  code: string,
  setPageLockedCallback: (flag: boolean) => void,
  setIsLoginPopupVisibleCallback: (flag: boolean) => void,
  setIsAuthorizedCallback: (flag: boolean) => void,
  setCurrentProfileInfoCallback: (profileInfo: ProfileInfo) => void
) {
  // Lock page to prevent user actions while retrieving profile data.
  setPageLockedCallback(true);

  Api.confirmAuthLinkedIn(code)
    // If the code is valid and correct.
    .then(response => {
      // 1. Save OAuth bearer token to cookies.
      setCookie(cookiesList.accessTokenLinkedIn, response.data[cookiesList.accessTokenLinkedIn]);

      // 2. Time to get basic profile info from LinkedIn.
      Api.getProfileLinkedIn()
        .then(profileResponse => {
          const isRegistered = profileResponse.data.isRegistered as boolean;
          const normalizedProfileInfo = mapProfileDtoToState(profileResponse.data);
          setCurrentProfileInfoCallback(normalizedProfileInfo);

          // 2.1 Register the user if it is not registered in our app yet.
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
        }).catch(onError);
    }).catch(onError)
    // Unlock the page in the end.
    .finally(() => setPageLockedCallback(false));
}

function isFacebookFailureResponse(result: FacebookLoginResponse)
  : result is ReactFacebookFailureResponse {
  // 'status' is a field of ReactFacebookFailureResponse type.
  return !!((result as ReactFacebookFailureResponse).status as Optional<string>);
}

export function onSuccessFacebook(
  result: FacebookLoginResponse,
  setIsLoginPopupVisibleCallback: (flag: boolean) => void,
  setIsAuthorizedCallback: (flag: boolean) => void,
  setCurrentProfileInfoCallback: (profileInfo: ProfileInfo) => void
) {
  if (!isFacebookFailureResponse(result)) {
    // 1. Save OAuth bearer token to cookies.
    setCookie(cookiesList.accessTokenFacebook, result.accessToken);

    // 2. Time to retrieve basic profile info from Facebook response.
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
  } else {
    onError();
  }
}
