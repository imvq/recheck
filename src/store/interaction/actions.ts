import { Dispatch } from 'redux';

import * as generalTypes from 'utils/typing/general';
import Api from 'utils/api';
import { MainToolbarEntry } from 'utils/enums';
import { AppActionType } from '../types';
import {
  InteractionStateActionType,
  SET_IS_PAGE_LOCKED,
  SET_IS_SEARCH_POPUP_VISIBILE,
  SET_IS_LOGIN_POPUP_VISIBILE,
  SET_CURRENT_MAIN_TOOLBAR_ENTRY,
  SET_IS_PROFILE_ABOUT_TAB_LOADING,
  SET_IS_PROFILE_HISTORY_TAB_LOADING,
  SET_IS_PROFILE_REVIEWS_TAB_LOADING,
  SET_REVIEWS_GOT_CHUNKS_AMOUNT,
  SET_REVIEWS_LEFT_CHUNKS_AMOUNT,
  SET_CURRENT_REVIEW_GOT,
  SET_CURRENT_REVIEW_LEFT
} from './types';

export const setIsPageLocked = (value: boolean)
  : InteractionStateActionType => ({
  type: SET_IS_PAGE_LOCKED,
  payload: value
});

export const setPageLocked = () => setIsPageLocked(true);
export const setPageUnlocked = () => setIsPageLocked(false);

export const setIsSearchPopupVisible = (flag: boolean)
  : InteractionStateActionType => ({
  type: SET_IS_SEARCH_POPUP_VISIBILE,
  payload: flag
});

export const setIsLoginPopupVisible = (value: boolean)
  : InteractionStateActionType => ({
  type: SET_IS_LOGIN_POPUP_VISIBILE,
  payload: value
});

export const setCurrentMainToolbarEntry = (entry: MainToolbarEntry)
  : InteractionStateActionType => ({
  type: SET_CURRENT_MAIN_TOOLBAR_ENTRY,
  payload: entry
});

export const setIsProfileAboutTabLoading = (flag: boolean)
  : InteractionStateActionType => ({
  type: SET_IS_PROFILE_ABOUT_TAB_LOADING,
  payload: flag
});

export const setIsProfileHistoryTabLoading = (flag: boolean)
  : InteractionStateActionType => ({
  type: SET_IS_PROFILE_HISTORY_TAB_LOADING,
  payload: flag
});

export const setIsProfileReviewsTabLoading = (flag: boolean)
  : InteractionStateActionType => ({
  type: SET_IS_PROFILE_REVIEWS_TAB_LOADING,
  payload: flag
});

export const setReviewsGotChunksAmount = (amount: number)
  : InteractionStateActionType => ({
  type: SET_REVIEWS_GOT_CHUNKS_AMOUNT,
  payload: amount
});

export const setReviewsLeftChunksAmount = (amount: number)
  : InteractionStateActionType => ({
  type: SET_REVIEWS_LEFT_CHUNKS_AMOUNT,
  payload: amount
});

export const setCurrentReviewGot = (review: generalTypes.ReviewCardGotData | null)
  : InteractionStateActionType => ({
  type: SET_CURRENT_REVIEW_GOT,
  payload: review
});

export const setCurrentReviewLeft = (review: generalTypes.ReviewCardLeftData | null)
  : InteractionStateActionType => ({
  type: SET_CURRENT_REVIEW_LEFT,
  payload: review
});

export const loadAboutTabData = (profileId: string) => (
  dispatch: Dispatch<AppActionType>
) => {
  Api.getNReviewsGot({ profileId })
    .then(amountDto => {
      dispatch(setReviewsGotChunksAmount(amountDto.data.amount));

      if (amountDto.data.amount) {
        Api.getNthReviewGot({ profileId, nthReview: 0 })
          .then(reviewDto => dispatch(setCurrentReviewGot(reviewDto.data)))
          .finally(() => dispatch(setIsProfileAboutTabLoading(false)));
      } else {
        dispatch(setIsProfileAboutTabLoading(false));
      }
    })
    .catch(() => {
      dispatch(setReviewsGotChunksAmount(0));
      dispatch(setIsProfileAboutTabLoading(false));
    });
};

export const loadReviewsTabData = (profileId: string) => (
  dispatch: Dispatch<AppActionType>
) => {
  Api.getNReviewsLeft({ profileId })
    .then(amountDto => {
      dispatch(setReviewsLeftChunksAmount(amountDto.data.amount));

      if (amountDto.data.amount) {
        Api.getNthReviewLeft({ profileId, nthReview: 0 })
          .then(reviewDto => dispatch(setCurrentReviewLeft(reviewDto.data)))
          .finally(() => dispatch(setIsProfileReviewsTabLoading(false)));
      } else {
        dispatch(setIsProfileReviewsTabLoading(false));
      }
    })
    .catch(() => {
      dispatch(setReviewsLeftChunksAmount(0));
      dispatch(setIsProfileReviewsTabLoading(false));
    });
};

export const loadNthReviewGot = (profileId: string, nthReview: number) => (
  dispatch: Dispatch<AppActionType>
) => {
  dispatch(setIsProfileAboutTabLoading(true));
  Api.getNthReviewGot({ profileId, nthReview })
    .then(nthReviewResponse => dispatch(setCurrentReviewGot(nthReviewResponse.data)))
    .finally(() => dispatch(setIsProfileAboutTabLoading(false)));
};

export const loadNthReviewLeft = (profileId: string, nthReview: number) => (
  dispatch: Dispatch<AppActionType>
) => {
  dispatch(setIsProfileReviewsTabLoading(true));
  Api.getNthReviewLeft({ profileId, nthReview })
    .then(nthReviewResponse => dispatch(setCurrentReviewLeft(nthReviewResponse.data)))
    .finally(() => dispatch(setIsProfileReviewsTabLoading(false)));
};
