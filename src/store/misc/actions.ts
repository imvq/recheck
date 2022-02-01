import { MainToolbarEntry, UserRole } from 'commons/types/unions';

import * as types from './types';

export const setIsRedirectedFromOrigin = (flag: boolean): types.IAction => ({
  type: types.SET_IS_REDIRECTED_FROM_ORIGIN,
  payload: flag
});

export const setIsRedirectHomePending = (flag: boolean): types.IAction => ({
  type: types.SET_IS_REDIRECT_HOME_PENDING,
  payload: flag
});

export const setIsPageLocked = (flag: boolean): types.IAction => ({
  type: types.SET_IS_PAGE_LOCKED,
  payload: flag
});

export const setPageLocked = () => setIsPageLocked(true);
export const setPageUnlocked = () => setIsPageLocked(false);

export const setIsSearchPopupVisible = (flag: boolean): types.IAction => ({
  type: types.SET_IS_SEARCH_POPUP_VISIBILE,
  payload: flag
});

export const setIsSpendFreeViewPopupVisible = (flag: boolean): types.IAction => ({
  type: types.SET_IS_SPEND_FREE_VIEW_POPUP_VISIBILE,
  payload: flag
});

export const setIsLoginPopupVisible = (flag: boolean): types.IAction => ({
  type: types.SET_IS_LOGIN_POPUP_VISIBLE,
  payload: flag
});

export const setIsInvitePopupVisible = (flag: boolean): types.IAction => ({
  type: types.SET_IS_INVITE_POPUP_VISIBLE,
  payload: flag
});

export const setCurrentMainToolbarEntry = (entry: MainToolbarEntry): types.IAction => ({
  type: types.SET_CURRENT_MAIN_TOOLBAR_ENTRY,
  payload: entry
});

export const setCurrentUserRole = (role: UserRole): types.IAction => ({
  type: types.SET_CURRENT_USER_ROLE,
  payload: role
});

export const setIsProfileAboutTabLoading = (flag: boolean): types.IAction => ({
  type: types.SET_IS_PROFILE_ABOUT_TAB_LOADING,
  payload: flag
});

export const setIsProfileHistoryTabLoading = (flag: boolean): types.IAction => ({
  type: types.SET_IS_PROFILE_HISTORY_TAB_LOADING,
  payload: flag
});

export const setIsProfileReviewsTabLoading = (flag: boolean): types.IAction => ({
  type: types.SET_IS_PROFILE_REVIEWS_TAB_LOADING,
  payload: flag
});

export const setRequestedUserShareableId = (shareableId: string | null): types.IAction => ({
  type: types.SET_REQUESTED_USER_SHAREABLE_ID,
  payload: shareableId
});
