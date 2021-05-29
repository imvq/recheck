import * as utilityTypes from 'utils/typing/utility';
import * as generalTypes from 'utils/typing/general';
import { ProfileMenuEntry } from 'utils/enums';

export const SET_IS_PAGE_LOCKED = 'SET_IS_PAGE_LOCKED';
export const SET_IS_LOGIN_POPUP_VISIBILE = 'SET_IS_LOGIN_POPUP_VISIBILE';
export const SET_CURRENT_PROFILE_MENU_ENTRY = 'SET_CURRENT_PROFILE_MENU_ENTRY';
export const SET_IS_PROFILE_ABOUT_TAB_LOADING = 'SET_IS_PROFILE_ABOUT_TAB_LOADING';
export const SET_IS_PROFILE_HISTORY_TAB_LOADING = 'SET_IS_PROFILE_HISTORY_TAB_LOADING';
export const SET_IS_PROFILE_REVIEWS_TAB_LOADING = 'SET_IS_PROFILE_REVIEWS_TAB_LOADING';
export const SET_REVIEWS_GOT_CHUNKS_AMOUNT = 'SET_REVIEWS_GOT_CHUNKS_AMOUNT';
export const SET_REVIEWS_LEFT_CHUNKS_AMOUNT = 'SET_REVIEWS_LEFT_CHUNKS_AMOUNT';
export const SET_CURRENT_REVIEW_GOT = 'SET_CURRENT_REVIEW_GOT';
export const SET_CURRENT_REVIEW_LEFT = 'SET_CURRENT_REVIEW_LEFT';

export interface InteractionState {
  isPageLocked: boolean;
  isSearchPopupVisible: boolean;
  isLoginPopupVisible: boolean;
  currentProfileMenuEntry: ProfileMenuEntry;
  isProfileAboutTabLoading: boolean;
  isProfileHistoryTabLoading: boolean;
  isProfileReviewsTabLoading: boolean;
  reviewsGotChunksAmount: number;
  reviewsLeftChunksAmount: number;
  currentReviewGot: utilityTypes.Nullable<generalTypes.ReviewCardGotData>;
  currentReviewLeft: utilityTypes.Nullable<generalTypes.ReviewCardDataFull>;
}

export interface SetIsPageLocked {
  type: typeof SET_IS_PAGE_LOCKED;
  payload: boolean;
}

export interface SetIsLoginPopupVisible {
  type: typeof SET_IS_LOGIN_POPUP_VISIBILE;
  payload: boolean;
}

export interface SetCurrentMenuProfileEntry {
  type: typeof SET_CURRENT_PROFILE_MENU_ENTRY;
  payload: ProfileMenuEntry;
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
  payload: utilityTypes.Nullable<generalTypes.ReviewCardGotData>;
}

export interface SetCurrentReviewLeft {
  type: typeof SET_CURRENT_REVIEW_LEFT;
  payload: utilityTypes.Nullable<generalTypes.ReviewCardDataFull>;
}

export type InteractionStateActionType =
  SetIsPageLocked
  | SetIsLoginPopupVisible
  | SetCurrentMenuProfileEntry
  | SetIsProfileAboutTabLoading
  | SetIsProfileHistoryTabLoading
  | SetIsProfileReviewsTabLoading
  | SetReviewsGotChunksAmount
  | SetReviewsLeftChunksAmount
  | SetCurrentReviewGot
  | SetCurrentReviewLeft;
