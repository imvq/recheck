import { Dispatch } from 'redux';

import * as utilityTypes from 'utils/typing/utility';
import * as generalTypes from 'utils/typing/general';
import Api from 'utils/api';
import { ProfileMenuEntry } from 'utils/enums';
import { AppActionType } from '../types';
import {
  InteractionStateActionType,
  SET_IS_PAGE_LOCKED,
  SET_IS_LOGIN_POPUP_VISIBILE,
  SET_CURRENT_PROFILE_MENU_ENTRY,
  SET_IS_PROFILE_ABOUT_TAB_LOADING,
  SET_IS_PROFILE_HISTORY_TAB_LOADING,
  SET_IS_PROFILE_REVIEWS_TAB_LOADING,
  SET_REVIEWS_GOT_CHUNKS_AMOUNT,
  SET_REVIEWS_LEFT_CHUNKS_AMOUNT,
  SET_CURRENT_REVIEW_GOT_INDEX,
  SET_CURRENT_REVIEW_LEFT_INDEX,
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

export const setIsLoginPopupVisible = (value: boolean)
  : InteractionStateActionType => ({
  type: SET_IS_LOGIN_POPUP_VISIBILE,
  payload: value
});

export const setCurrentMenuProfileEntry = (entry: ProfileMenuEntry)
  : InteractionStateActionType => ({
  type: SET_CURRENT_PROFILE_MENU_ENTRY,
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

export const setCurrentReviewGotIndex = (amount: number)
  : InteractionStateActionType => ({
  type: SET_CURRENT_REVIEW_GOT_INDEX,
  payload: amount
});

export const setCurrentReviewLeftIndex = (amount: number)
  : InteractionStateActionType => ({
  type: SET_CURRENT_REVIEW_LEFT_INDEX,
  payload: amount
});

export const setCurrentReviewGot = (review: utilityTypes.Nullable<generalTypes.ReviewCardGotData>)
  : InteractionStateActionType => ({
  type: SET_CURRENT_REVIEW_GOT,
  payload: review
});

export const setCurrentReviewLeft = (review: utilityTypes.Nullable<generalTypes.ReviewCardDataFull>)
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

      Api.getNthReviewGot({ profileId, nthReview: 0 })
        .then(reviewDto => dispatch(setCurrentReviewGot(reviewDto.data)))
        .finally(() => dispatch(setIsProfileAboutTabLoading(false)));
    })
    .catch(() => {
      dispatch(setReviewsGotChunksAmount(0));
      dispatch(setIsProfileAboutTabLoading(false));
    });
};
