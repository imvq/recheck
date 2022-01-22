import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AxiosResponse } from 'axios';

import * as types from 'commons/types';

import { jumpTo } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';

import * as interactionActions from './interaction/actions';
import * as observingActions from './observing/actions';
import * as profileActions from './profile/actions';
import * as reviewsActions from './reviews/actions';
import * as searchActions from './search/actions';

import { store } from './setup';
import { AppActionType } from './types';

export function updateAuthorizationStatus() {
  return (dispatch: Dispatch<AppActionType>, getState: typeof store.getState) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      apiClient.retrieveProfile(accessToken, getState().interaction.currentUserRole)
        .then(profileData => postProcessProfileRetrieving(dispatch, getState, profileData))
        .catch(() => {
          localStorage.removeItem('accessToken');
          dispatch(profileActions.setIsConfirmed(false));
        });

      return;
    }

    dispatch(profileActions.setIsConfirmed(false));
  };
}

function postProcessProfileRetrieving(
  dispatch: Dispatch<AppActionType>,
  getState: typeof store.getState,
  profileData: AxiosResponse<types.IUserSelf>
) {
  dispatch(profileActions.setPhotoUrl(profileData.data.photoUrl as string));

  if (!profileData.data.registered) {
    processProfileUnregistered(dispatch, profileData);
    return;
  }

  if (!profileData.data.confirmed) {
    processProfileUnconfirmed(dispatch, profileData);
    return;
  }

  processProfileConfirmed(dispatch, profileData);
  postProcessProfileConfirmed(dispatch, getState);
}

function processProfileUnregistered(
  dispatch: Dispatch<AppActionType>,
  profileData: AxiosResponse<types.IUserSelf>
) {
  dispatch(profileActions.setMandatoryBasicFields(profileData.data.socialId, false));

  dispatch(interactionActions.setIsRedirectedFromOrigin(true));
  dispatch(interactionActions.setIsPageLocked(false));
  jumpTo('/register');
}

function processProfileUnconfirmed(
  dispatch: Dispatch<AppActionType>,
  profileData: AxiosResponse<types.IUserSelf>
) {
  dispatch(profileActions.setMandatoryBasicFields(profileData.data.socialId, false));
  dispatch(profileActions.setPrivateToken(profileData.data.privateToken as string));
  dispatch(profileActions.setEmail(profileData.data.email as string));

  dispatch(interactionActions.setIsRedirectedFromOrigin(true));
  jumpTo('/await-user-confirmation');
}

function processProfileConfirmed(
  dispatch: Dispatch<AppActionType>,
  profileData: AxiosResponse<types.IUserSelf>
) {
  const { currentCompanyId: companyId, currentCompanyName: companyName } = profileData.data;
  const { currentWorkYearFrom: year, currentWorkMonthFrom: month } = profileData.data;

  dispatch(profileActions.setPrivateToken(profileData.data.privateToken as string));
  dispatch(profileActions.setShareableId(profileData.data.shareableId as string));
  dispatch(profileActions.setSocialId(profileData.data.socialId));
  dispatch(profileActions.setFullName(profileData.data.fullName as string));
  dispatch(profileActions.setEmail(profileData.data.email as string));
  dispatch(profileActions.setCurrentPosition(profileData.data.currentPosition as string));
  dispatch(profileActions.setCurrentCompany({
    id: companyId as string,
    name: companyName as string
  }));
  dispatch(profileActions.setCurrentWorkStarPeriod({
    year: year as number,
    month: month as number
  }));

  dispatch(profileActions.setIsConfirmed(true));
}

function postProcessProfileConfirmed(
  dispatch: Dispatch<AppActionType>,
  getState: typeof store.getState
) {
  processRedirectingFlag(dispatch, getState);
  processPreparedReview(dispatch, getState);
}

function processRedirectingFlag(
  dispatch: Dispatch<AppActionType>,
  getState: typeof store.getState
) {
  if (getState().interaction.isRedirectHomePending) {
    dispatch(interactionActions.setIsRedirectHomePending(false));

    jumpTo('/profile');
  }
}

function processPreparedReview(
  dispatch: ThunkDispatch<any, void, AppActionType>,
  getState: typeof store.getState,
) {
  const preparedReview = localStorage.getItem('preparedReview');

  if (preparedReview) {
    type PreparedReview = { targetShareableId: string; reviewData: types.IReviewCreated; };
    const { targetShareableId, reviewData }: PreparedReview = JSON.parse(preparedReview);

    dispatch(createReview(
      getState().profile.privateToken as string,
      targetShareableId,
      reviewData
    ));

    localStorage.removeItem('preparedReview');
  }
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
      answers: reviewData.comments,
      marks: reviewData.marks
    });

    apiClient.createReview(privateToken, targetShareableId, content)
      .then(callback)
      .catch(() => jumpTo('/404'));

    dispatch(reviewsActions.clearAnswers());
  };
}

export function quickSearchCompanies(sequence: string) {
  return (dispatch: Dispatch<AppActionType>) => {
    apiClient.quickSearchCompanies(sequence)
      .then(matchData => dispatch(searchActions.setQuickSearchMatchedCompanies(matchData.data)));
  };
}

export function loadObservedUsers(
  privateToken: string, last: number, finalize: (newLast: number) => void, recreate?: boolean
) {
  const updater = recreate ? observingActions.setObservedUsers
    : observingActions.appendObservedUsers;

  let newLast = last;

  return (dispatch: Dispatch<AppActionType>) => {
    apiClient.loadAvailableUsers(privateToken, last)
      .then(observedUsersData => {
        if (observedUsersData.data.length) {
          newLast = +observedUsersData.data[observedUsersData.data.length - 1].id;
        }

        dispatch(updater(observedUsersData.data));
      })
      .finally(() => finalize(newLast));
  };
}
