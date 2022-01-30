import { MainToolbarEntry, UserRole } from 'commons/types/unions';

export const SET_IS_REDIRECTED_FROM_ORIGIN = 'SET_IS_REDIRECTED_FROM_ORIGIN';
export const SET_IS_REDIRECT_HOME_PENDING = 'SET_IS_REDIRECT_HOME_PENDING';
export const SET_IS_PAGE_LOCKED = 'SET_IS_PAGE_LOCKED';
export const SET_IS_SPEND_FREE_VIEW_POPUP_VISIBILE = 'SET_IS_SPEND_FREE_VIEW_POPUP_VISIBILE';
export const SET_IS_SEARCH_POPUP_VISIBILE = 'SET_IS_SEARCH_POPUP_VISIBILE';
export const SET_IS_LOGIN_POPUP_VISIBLE = 'SET_IS_LOGIN_POPUP_VISIBILE';
export const SET_IS_INVITE_POPUP_VISIBLE = 'SET_IS_INVITE_POPUP_VISIBLE';
export const SET_CURRENT_MAIN_TOOLBAR_ENTRY = 'SET_CURRENT_MAIN_TOOLBAR_ENTRY';
export const SET_CURRENT_USER_ROLE = 'SET_CURRENT_USER_ROLE';
export const SET_IS_PROFILE_ABOUT_TAB_LOADING = 'SET_IS_PROFILE_ABOUT_TAB_LOADING';
export const SET_IS_PROFILE_HISTORY_TAB_LOADING = 'SET_IS_PROFILE_HISTORY_TAB_LOADING';
export const SET_IS_PROFILE_REVIEWS_TAB_LOADING = 'SET_IS_PROFILE_REVIEWS_TAB_LOADING';
export const SET_REQUESTED_USER_SHAREABLE_ID = 'SET_REQUESTED_USER_SHAREABLE_ID';

export interface IState {
  currentMainToolbarEntry: MainToolbarEntry;
  currentUserRole: UserRole;
  isRedirectedFromOrigin: boolean;
  isRedirectHomePending: boolean;
  isPageLocked: boolean;
  isSearchPopupVisible: boolean;
  isSpendFreeViewPopupVisible: boolean;
  isLoginPopupVisible: boolean;
  isInvitePopupVisible: boolean;
  isProfileAboutTabLoading: boolean;
  isProfileHistoryTabLoading: boolean;
  isProfileReviewsTabLoading: boolean;
  requestedUserShareableId: string | null;
}

export interface SetCurrentMainToolbarEntry {
  type: typeof SET_CURRENT_MAIN_TOOLBAR_ENTRY;
  payload: MainToolbarEntry;
}

export interface SetCurrentUserRole {
  type: typeof SET_CURRENT_USER_ROLE;
  payload: UserRole;
}

export interface SetIsRedirectedFromOrigin {
  type: typeof SET_IS_REDIRECTED_FROM_ORIGIN;
  payload: boolean;
}

export interface SetIsRedirectHomePending {
  type: typeof SET_IS_REDIRECT_HOME_PENDING;
  payload: boolean;
}

export interface SetIsPageLocked {
  type: typeof SET_IS_PAGE_LOCKED;
  payload: boolean;
}

export interface SetIsSearchPopupVisible {
  type: typeof SET_IS_SEARCH_POPUP_VISIBILE;
  payload: boolean;
}

export interface SetIsSpendFreeViewPopupVisible {
  type: typeof SET_IS_SPEND_FREE_VIEW_POPUP_VISIBILE;
  payload: boolean;
}

export interface SetIsLoginPopupVisible {
  type: typeof SET_IS_LOGIN_POPUP_VISIBLE;
  payload: boolean;
}

export interface SetIsInvitePopupVisible {
  type: typeof SET_IS_INVITE_POPUP_VISIBLE;
  payload: boolean;
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

export interface SetRequestedUserShareableId {
  type: typeof SET_REQUESTED_USER_SHAREABLE_ID;
  payload: string | null;
}

export type IAction =
    SetCurrentMainToolbarEntry
  | SetCurrentUserRole
  | SetIsRedirectedFromOrigin
  | SetIsRedirectHomePending
  | SetIsPageLocked
  | SetIsSearchPopupVisible
  | SetIsSpendFreeViewPopupVisible
  | SetIsLoginPopupVisible
  | SetIsInvitePopupVisible
  | SetIsProfileAboutTabLoading
  | SetIsProfileHistoryTabLoading
  | SetIsProfileReviewsTabLoading
  | SetRequestedUserShareableId;
