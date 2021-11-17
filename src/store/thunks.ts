import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import * as types from 'commons/types';

import { jumpTo } from 'commons/utils/misc';
import { apiClient, cookieManager } from 'commons/utils/services';

import * as interactionActions from './interaction/actions';
import * as profileActions from './profile/actions';
import * as reviewsActions from './reviews/actions';

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
    profileActions.setPrivateToken(profileData.data.privateToken);
    profileActions.setEmail(profileData.data.email);
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

  jumpTo('/profile');
}

export function loadAboutTabData(privateToken: string) {
  return (dispatch: Dispatch<AppActionType>) => {
    apiClient.getReceivedReviewsAmount(privateToken)

      .then(amountData => {
        dispatch(reviewsActions.setReceivedReviewsAmount(amountData.data.result));

        // TODO: load Nth review.

        dispatch(interactionActions.setIsProfileAboutTabLoading(false));
      })

      .catch(() => {
        dispatch(reviewsActions.setReceivedReviewsAmount(0));
        dispatch(interactionActions.setIsProfileAboutTabLoading(false));
      });
  };
}

export const createReview = (reviewData: IReviewData, callback: () => void) => (
  dispatch: Dispatch<AppActionType>
) => {
  apiClient.prepareReview({ ...reviewData })
    .then(() => callback())
    .catch(() => jumpTo('/404'));

  dispatch(clearTasks());
  dispatch(clearRecommendationData());
  dispatch(clearStrengths());
};
