import { mainToolbarEntries, userRoles } from 'commons/types/unions';

import * as types from './types';

const initialState: types.IState = {
  isRedirectedFromOrigin: false,
  isRedirectHomePending: false,
  isPageLocked: true,
  isSearchPopupVisible: false,
  isSpendFreeViewPopupVisible: false,
  isLoginPopupVisible: false,
  isAskForReviewPopupVisible: false,
  isInvitePopupVisible: false,
  currentMainToolbarEntry: mainToolbarEntries.Welcome,
  currentUserRole: userRoles.Recruiter,
  isProfileAboutTabLoading: true,
  isProfileHistoryTabLoading: true,
  isProfileReviewsTabLoading: true,
  requestedShareableId: null
};

export function miscStateReducer(state = initialState, action: types.IAction): types.IState {
  switch (action.type) {
    case types.SET_IS_REDIRECTED_FROM_ORIGIN:
      return {
        ...state,
        isRedirectedFromOrigin: action.payload
      };
    case types.SET_IS_REDIRECT_HOME_PENDING:
      return {
        ...state,
        isRedirectHomePending: action.payload
      };
    case types.SET_IS_PAGE_LOCKED:
      return {
        ...state,
        isPageLocked: action.payload
      };
    case types.SET_IS_SEARCH_POPUP_VISIBILE:
      return {
        ...state,
        isSearchPopupVisible: action.payload
      };
    case types.SET_IS_SPEND_FREE_VIEW_POPUP_VISIBILE:
      return {
        ...state,
        isSpendFreeViewPopupVisible: action.payload
      };
    case types.SET_IS_LOGIN_POPUP_VISIBLE:
      return {
        ...state,
        isLoginPopupVisible: action.payload
      };
    case types.SET_IS_ASK_FOR_REVIEW_POPUP_VISIBLE:
      return {
        ...state,
        isAskForReviewPopupVisible: action.payload
      };
    case types.SET_IS_INVITE_POPUP_VISIBLE:
      return {
        ...state,
        isInvitePopupVisible: action.payload
      };
    case types.SET_CURRENT_MAIN_TOOLBAR_ENTRY:
      return {
        ...state,
        currentMainToolbarEntry: action.payload
      };
    case types.SET_CURRENT_USER_ROLE:
      return {
        ...state,
        currentUserRole: action.payload,
        currentMainToolbarEntry: action.payload === 'candidate'
          ? 'AboutMe' : 'ObservedUsers'
      };
    case types.SET_IS_PROFILE_ABOUT_TAB_LOADING:
      return {
        ...state,
        isProfileAboutTabLoading: action.payload
      };
    case types.SET_IS_PROFILE_HISTORY_TAB_LOADING:
      return {
        ...state,
        isProfileHistoryTabLoading: action.payload
      };
    case types.SET_IS_PROFILE_REVIEWS_TAB_LOADING:
      return {
        ...state,
        isProfileReviewsTabLoading: action.payload
      };
    case types.SET_REQUESTED_USER_SHAREABLE_ID:
      return {
        ...state,
        requestedShareableId: action.payload
      };
    default:
      return state;
  }
}
