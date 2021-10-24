import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import * as types from 'commons/types';

import { jumpTo } from 'commons/utils/misc';
import { apiClient, cookieManager } from 'commons/utils/services';

import * as profileActions from './profile/actions';

import { AppActionType } from './types';

export async function updateAuthorizationStatus() {
  return (dispatch: Dispatch<AppActionType>) => {
    // If we have a saved access token then we are logged in with a social media.
    // In that case we can try to retrieve profile info from the server.
    if (cookieManager.get('accessToken')) {
      apiClient.retrieveProfile()
        .then(profileData => loadProfileData(profileData))
        .catch(() => {
          cookieManager.remove('accessToken');
          dispatch(profileActions.setIsAuthorized(false));
        });

      return;
    }

    dispatch(profileActions.setIsAuthorized(false));
  };
}

function loadProfileData(profileData: AxiosResponse<types.IUserSelf>) {
  if (!profileData.data.registered) {
    profileActions.setSocialId(profileData.data.socialId);
    jumpTo('/register');

    return;
  }

  if (!profileData.data.confirmed) {
    profileActions.setSocialId(profileData.data.socialId);
    jumpTo('/await-user-confirmation');

    return;
  }

  const { companyId, companyName } = profileData.data;
  const { currentWorkYearFrom: year, currentWorkMonthFrom: month } = profileData.data;

  profileActions.setPrivateToken(profileData.data.privateToken);
  profileActions.setShareableId(profileData.data.shareableId);
  profileActions.setSocialId(profileData.data.socialId);
  profileActions.setFullName(profileData.data.fullName);
  profileActions.setEmail(profileData.data.email);
  profileActions.setPhotoUrl(profileData.data.photoUrl);
  profileActions.setCurrentPosition(profileData.data.currentPosition);
  profileActions.setCurrentCompany({ id: companyId, name: companyName });
  profileActions.setCurrentWorkStarPeriod({ year, month });

  profileActions.setIsAuthorized(true);
}
