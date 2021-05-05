import { cookieManager, cookiesList } from 'utils/cookies';

export function onExit(lockPageCallback: () => void) {
  lockPageCallback();
  cookieManager.remove(cookiesList.accessTokenLinkedIn);
  cookieManager.remove(cookiesList.accessTokenFacebook);
  window.location.replace(window.location.origin);
}
