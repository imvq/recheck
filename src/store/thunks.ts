import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AxiosResponse } from 'axios';

import * as types from 'commons/types';

import { jumpTo } from 'commons/utils/misc';
import { apiClient, cookieManager } from 'commons/utils/services';

import * as interactionActions from './interaction/actions';
import * as profileActions from './profile/actions';
import * as reviewsActions from './reviews/actions';
import * as searchActions from './search/actions';

import { AppActionType } from './types';

export function updateAuthorizationStatus() {
  return (dispatch: Dispatch<AppActionType>) => {
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
  return (dispatch: ThunkDispatch<any, void, AppActionType>) => {
    dispatch(interactionActions.setIsProfileAboutTabLoading(true));

    apiClient.getReceivedReviewsAmount(privateToken)
      .then(amountData => {
        dispatch(reviewsActions.setReceivedReviewsAmount(amountData.data.result));

        if (amountData.data.result > 0) {
          dispatch(loadNthReceivedReview(privateToken, 0));
        }
      })
      .catch(() => {
        dispatch(reviewsActions.setReceivedReviewsAmount(0));
      })
      .finally(() => {
        dispatch(interactionActions.setIsProfileAboutTabLoading(false));
      });
  };
}

export function loadReviewsTabData(privateToken: string) {
  return (dispatch: ThunkDispatch<any, void, AppActionType>) => {
    dispatch(interactionActions.setIsProfileReviewsTabLoading(true));

    apiClient.getLeftReviewsAmount(privateToken)
      .then(amountData => {
        dispatch(reviewsActions.setLeftReviewsAmount(amountData.data.result));

        if (amountData.data.result > 0) {
          dispatch(loadNthLeftReview(privateToken, 0));
        }
      })
      .catch(() => {
        dispatch(reviewsActions.setLeftReviewsAmount(0));
      })
      .finally(() => {
        dispatch(interactionActions.setIsProfileReviewsTabLoading(false));
      });
  };
}

export function loadNthReceivedReview(privateToken: string, n: number | string) {
  return (dispatch: Dispatch<AppActionType>) => {
    dispatch(interactionActions.setIsProfileAboutTabLoading(true));

    apiClient.getNthReceivedReview(privateToken, n)
      .then(reviewData => {
        dispatch(reviewsActions.setCurrentObservedReceivedReview(reviewData.data));
      })
      .finally(() => {
        dispatch(interactionActions.setIsProfileAboutTabLoading(false));
      });
  };
}

export function loadNthLeftReview(privateToken: string, n: number | string) {
  return (dispatch: Dispatch<AppActionType>) => {
    dispatch(interactionActions.setIsProfileReviewsTabLoading(true));

    apiClient.getNthLeftReview(privateToken, n)
      .then(reviewData => {
        dispatch(reviewsActions.setCurrentObservedLeftReview(reviewData.data));
      })
      .finally(() => {
        dispatch(interactionActions.setIsProfileReviewsTabLoading(false));
      });
  };
}

export function createReview(
  privateToken: string,
  targetShareableId: string,
  reviewData: types.IReviewCreated,
  callback?: () => void
) {
  return (dispatch: Dispatch<AppActionType>) => {
    const content = JSON.stringify({
      questions: reviewData.questions,
      answers: reviewData.answers,
      marks: reviewData.marks
    });

    apiClient.createReview(privateToken, targetShareableId, content)
      .then(callback)
      .catch(() => jumpTo('/404'));

    dispatch(reviewsActions.clearAnswersAndMarks());
  };
}

export function searchUsersByTokens(tokens: string[]) {
  return (dispatch: Dispatch<AppActionType>) => {
    apiClient.searchUsersByTokens(tokens)
      .then(searchResults => dispatch(searchActions.setUserSearchResults(searchResults.data)))
      .finally(() => dispatch(interactionActions.setPageUnlocked()));
  };
}

export function quickSearchUsersByTokens(tokens: string[]) {
  return (dispatch: Dispatch<AppActionType>) => {
    apiClient.quickSearchUsersByTokens(tokens)
      .then(matchData => dispatch(searchActions.setQuickSearchMatchedUsers(matchData.data)));
  };
}

export function searchUserByShareableId(shareableId: string) {
  return (dispatch: Dispatch<AppActionType>) => {
    apiClient.searchUserByShareableId(shareableId)
      .then(searchResult => dispatch(searchActions.setUserSearchResults([searchResult.data])))
      .finally(() => dispatch(interactionActions.setPageUnlocked()));
  };
}

export function quickSearchCompanies(sequence: string) {
  return (dispatch: Dispatch<AppActionType>) => {
    apiClient.quickSearchCompanies(sequence)
      .then(matchData => dispatch(searchActions.setQuickSearchMatchedCompanies(matchData.data)));
  };
}

export function loadRecommendations(last: number) {
  return (dispatch: Dispatch<AppActionType>) => {
    apiClient.loadPredefinedCompanies(last)
      .then(companiesData => dispatch(searchActions.appendRecommendations(companiesData.data)));
  };
}
