import { Dispatch } from 'redux';

import httpStatus from 'http-status-codes';

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
        .catch(error => {
          // If there is a conflict then the user is not registered yet.
          if (error && error.code === httpStatus.CONFLICT) {
            dispatch(profileActions.setIsAuthorized(false));
            jumpTo('/register');
            return;
          }

          // If there is an internal server error then we must tell user about it.
          if (error && error.code === httpStatus.INTERNAL_SERVER_ERROR) {
            // TODO: Show alert.
          }

          // If there is no conflicts then the social media refused to authorize the user.
          // In that case we must
          dispatch(profileActions.setIsAuthorized(false));
        });

      return;
    }

    dispatch(profileActions.setIsAuthorized(false));
  };
}

function loadProfileData(profileData: AxiosResponse<types.IUserSelf>) {
  const { companyId, companyName } = profileData.data;
  const { currentWorkStartYear: year, currentWorkStartMonth: month } = profileData.data;

  profileActions.setPrivateToken(profileData.data.privateToken);
  profileActions.setShareableId(profileData.data.shareableId);
  profileActions.setSocialId(profileData.data.socialId);
  profileActions.setFullName(profileData.data.fullName);
  profileActions.setEmail(profileData.data.email);
  profileActions.setPhotoUrl(profileData.data.photoUrl);
  profileActions.setCurrentPosition(profileData.data.currentPosition);
  profileActions.setCurrentCompany({ id: companyId, name: companyName });
  profileActions.setCurrentWorkStarPeriod({ year, month });
}
