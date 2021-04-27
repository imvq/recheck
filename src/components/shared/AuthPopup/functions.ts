import { ReactFacebookLoginInfo, ReactFacebookFailureResponse } from 'react-facebook-login';

import Api from 'utils/api';
import * as constants from 'utils/constants';
import controlledHistory from 'utils/routing';
import { Optional, AppProfileInfo, LinkedInProfileDto, FacebookProfileDto } from 'utils/types.common';
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

/**
 * Do stuff on LinkedIn or Facebook profile info got through the API.
 */
function onProfileDataRetrieved(
  setPageLockedCallback: (flag: boolean) => void,
  setIsLoginPopupVisibleCallback: (flag: boolean) => void,
  setIsAuthorizedCallback: (flag: boolean) => void,
  setCurrentProfileInfoCallback: (profileInfo: AppProfileInfo) => void,
  profileResponse: LinkedInProfileDto | FacebookProfileDto
) {
  const normalizedProfileInfo = mapProfileDtoToState(profileResponse);
  setCurrentProfileInfoCallback(normalizedProfileInfo);

  Api.checkIsRegistered(normalizedProfileInfo.currentId)
    .then((checkResponse) => {
      if (checkResponse.data.flag) {
        setIsAuthorizedCallback(true);
        setIsLoginPopupVisibleCallback(false);
      } else {
        // Unlock the page and forward the user to
        // registration page if it is not registered in our app yet.
        setPageLockedCallback(false);
        controlledHistory.push('/register');
      }
    })
    .catch(() => setIsAuthorizedCallback(false));
}

export function onSuccessLinkedIn(
  code: string,
  setPageLockedCallback: (flag: boolean) => void,
  setIsLoginPopupVisibleCallback: (flag: boolean) => void,
  setIsAuthorizedCallback: (flag: boolean) => void,
  setCurrentProfileInfoCallback: (profileInfo: AppProfileInfo) => void
) {
  // Lock page to prevent user actions while retrieving and processing profile data.
  setPageLockedCallback(true);

  Api.exchangeLinkedInCode(code)
    // If the code is valid and correct.
    .then(response => {
      // 1. Save OAuth bearer token to cookies.
      setCookie(cookiesList.accessTokenLinkedIn, response.data[cookiesList.accessTokenLinkedIn]);

      // 2. Time to get basic profile info from LinkedIn
      // and register the user if it is not yet registered.
      Api.getProfileLinkedIn()
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

function isFacebookFailureResponse(result: FacebookLoginResponse)
  : result is ReactFacebookFailureResponse {
  // 'status' is a field of ReactFacebookFailureResponse type.
  return !!((result as ReactFacebookFailureResponse).status as Optional<string>);
}

export function onSuccessFacebook(
  result: FacebookLoginResponse,
  setPageLockedCallback: (flag: boolean) => void,
  setIsLoginPopupVisibleCallback: (flag: boolean) => void,
  setIsAuthorizedCallback: (flag: boolean) => void,
  setCurrentProfileInfoCallback: (profileInfo: AppProfileInfo) => void
) {
  // Lock page to prevent user actions while processing profile data.
  setPageLockedCallback(true);

  if (!isFacebookFailureResponse(result)) {
    // 1. Save OAuth bearer token to cookies.
    setCookie(cookiesList.accessTokenFacebook, result.accessToken);

    // 2. Time to retrieve basic profile info from Facebook response.
    const oauthData = result as ReactFacebookLoginInfo;
    const profileInfo: FacebookProfileDto = {
      profileId: oauthData.userID,
      name: oauthData.name || '',
      photoUrl: oauthData.picture?.data.url || ''
    };

    onProfileDataRetrieved(
      setPageLockedCallback,
      setIsLoginPopupVisibleCallback,
      setIsAuthorizedCallback,
      setCurrentProfileInfoCallback,
      profileInfo
    );
  } else {
    onError();
  }
}
