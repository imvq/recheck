import { Dispatch } from 'redux';

import { apiClient, cookieManager } from 'commons/utils/services';

import * as profileActions from './profile/actions';

import { AppActionType } from './types';

export function retrieveProfile() {
  return (dispatch: Dispatch<AppActionType>) => {
    if (cookieManager.get('accessToken')) {
      apiClient.retrieveProfile()
        .then(accessData => {
          profileActions.setPrivateToken(accessData.data.privateToken);
          profileActions.setShareableId(accessData.data.shareableId);
          profileActions.setSocialId(accessData.data.socialId);
        })
        .catch(() => dispatch(profileActions.setIsAuthorized(false)));
    }

    dispatch(profileActions.setIsAuthorized(false));
  };
}
