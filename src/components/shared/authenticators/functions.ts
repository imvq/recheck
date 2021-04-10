import Api from 'utils/api';
import * as constants from 'utils/constants';
import { ProfileInfo } from 'utils/types.common';
import { mapProfileDtoToState } from 'utils/functions';
import { cookieManager, cookiesList } from 'utils/cookies';

export function onExit(lockPageCallback: () => void) {
  lockPageCallback();
  cookieManager.remove(cookiesList.accessTokenLinkedIn);
  cookieManager.remove(cookiesList.accessTokenFacebook);
  window.location.replace(window.location.origin);
}

export function onError(setIsAuthorizedCallback: (flag: boolean) => void) {
  setIsAuthorizedCallback(false);
  window.location.replace(window.location.origin);
}

export function onSuccessLinkedIn(
  code: string,
  setIsAuthorizedCallback: (flag: boolean) => void,
  setCurrentProfileInfoCallback: (profileInfo: ProfileInfo) => void
) {
  Api.confirmAuthLinkedIn(code)
    .then(confirmationResponse => {
      // Save OAuth bearer token to cookies.
      const tokenExpiration = new Date(Date.now() + constants.MONTH_MS * 2);
      cookieManager.set(
        cookiesList.accessTokenLinkedIn,
        confirmationResponse.data['BEARER'],
        { path: '/', expires: tokenExpiration }
      );

      Api.getProfile()
        .then(profileResponse => {
          const isRegistered = profileResponse.data.isRegistered as boolean;
          const normalizedProfileInfo = mapProfileDtoToState(profileResponse.data);
          setCurrentProfileInfoCallback(normalizedProfileInfo);
          setIsAuthorizedCallback(true);

          // TODO: register LinkedIn user.
        }).catch(() => onError(setIsAuthorizedCallback));
    }).catch(() => onError(setIsAuthorizedCallback));
}
