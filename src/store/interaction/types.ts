import * as generalTypes from 'utils/typing/general';
import { MainToolbarEntry } from 'utils/enums';

export const SET_IS_PAGE_LOCKED = 'SET_IS_PAGE_LOCKED';
export const SET_IS_SEARCH_POPUP_VISIBILE = 'SET_IS_SEARCH_POPUP_VISIBILE';
export const SET_IS_LOGIN_POPUP_VISIBILE = 'SET_IS_LOGIN_POPUP_VISIBILE';
export const SET_CURRENT_MAIN_TOOLBAR_ENTRY = 'SET_CURRENT_MAIN_TOOLBAR_ENTRY';
export const SET_IS_PROFILE_ABOUT_TAB_LOADING = 'SET_IS_PROFILE_ABOUT_TAB_LOADING';
export const SET_IS_PROFILE_HISTORY_TAB_LOADING = 'SET_IS_PROFILE_HISTORY_TAB_LOADING';
export const SET_IS_PROFILE_REVIEWS_TAB_LOADING = 'SET_IS_PROFILE_REVIEWS_TAB_LOADING';
export const SET_REFERRAL = 'SET_REFERRAL';
export const SET_AWAITER = 'SET_AWAITER';
export const SET_REVIEWS_GOT_CHUNKS_AMOUNT = 'SET_REVIEWS_GOT_CHUNKS_AMOUNT';
export const SET_REVIEWS_LEFT_CHUNKS_AMOUNT = 'SET_REVIEWS_LEFT_CHUNKS_AMOUNT';
export const SET_CURRENT_REVIEW_GOT = 'SET_CURRENT_REVIEW_GOT';
export const SET_CURRENT_REVIEW_LEFT = 'SET_CURRENT_REVIEW_LEFT';

export interface InteractionState {
  isPageLocked: boolean;
  isSearchPopupVisible: boolean;
  isLoginPopupVisible: boolean;
  currentMainToolbarEntry: MainToolbarEntry;
  isProfileAboutTabLoading: boolean;
  isProfileHistoryTabLoading: boolean;
  isProfileReviewsTabLoading: boolean;
  referral: string | null;
  awaiter: string | null,
  reviewsGotChunksAmount: number;
  reviewsLeftChunksAmount: number;
  currentReviewGot: generalTypes.ReviewCardGotData | null;
  currentReviewLeft: generalTypes.ReviewCardLeftData | null;
}

export interface SetIsPageLocked {
  type: typeof SET_IS_PAGE_LOCKED;
  payload: boolean;
}

export interface SetIsSearchPopupVisible {
  type: typeof SET_IS_SEARCH_POPUP_VISIBILE;
  payload: boolean;
}

export interface SetIsLoginPopupVisible {
  type: typeof SET_IS_LOGIN_POPUP_VISIBILE;
  payload: boolean;
}

export interface SetCurrentMainToolbarEntry {
  type: typeof SET_CURRENT_MAIN_TOOLBAR_ENTRY;
  payload: MainToolbarEntry;
}

export interface SetIsProfileAboutTabLoading {
  type: typeof SET_IS_PROFILE_ABOUT_TAB_LOADING;
  payload: boolean;
}

export interface SetIsProfileHistoryTabLoading {
  type: typeof SET_IS_PROFILE_HISTORY_TAB_LOADING;
  payload: boolean;
}

export interface SetIsProfileReviewsTabLoading {
  type: typeof SET_IS_PROFILE_REVIEWS_TAB_LOADING;
  payload: boolean;
}

export interface SetReferral {
  type: typeof SET_REFERRAL;
  payload: string;
}

export interface SetAwaiter {
  type: typeof SET_AWAITER;
  payload: string;
}

export interface SetReviewsGotChunksAmount {
  type: typeof SET_REVIEWS_GOT_CHUNKS_AMOUNT;
  payload: number;
}

export interface SetReviewsLeftChunksAmount {
  type: typeof SET_REVIEWS_LEFT_CHUNKS_AMOUNT;
  payload: number;
}

export interface SetCurrentReviewGot {
  type: typeof SET_CURRENT_REVIEW_GOT;
  payload: generalTypes.ReviewCardGotData | null;
}

export interface SetCurrentReviewLeft {
  type: typeof SET_CURRENT_REVIEW_LEFT;
  payload: generalTypes.ReviewCardLeftData | null;
}

export type InteractionStateActionType =
  SetIsPageLocked
  | SetIsSearchPopupVisible
  | SetIsLoginPopupVisible
  | SetCurrentMainToolbarEntry
  | SetIsProfileAboutTabLoading
  | SetIsProfileHistoryTabLoading
  | SetIsProfileReviewsTabLoading
  | SetReferral
  | SetAwaiter
  | SetReviewsGotChunksAmount
  | SetReviewsLeftChunksAmount
  | SetCurrentReviewGot
  | SetCurrentReviewLeft;
