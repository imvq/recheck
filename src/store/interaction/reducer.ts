import { MainToolbarEntry } from 'utils/enums';
import {
  InteractionState,
  InteractionStateActionType,
  SET_IS_PAGE_LOCKED,
  SET_IS_SEARCH_POPUP_VISIBILE,
  SET_IS_LOGIN_POPUP_VISIBILE,
  SET_CURRENT_MAIN_TOOLBAR_ENTRY,
  SET_IS_OBSERVED_REVIEWS_PAGE_LOADING,
  SET_IS_PROFILE_ABOUT_TAB_LOADING,
  SET_IS_PROFILE_HISTORY_TAB_LOADING,
  SET_IS_PROFILE_REVIEWS_TAB_LOADING,
  SET_REFERRAL,
  SET_AWAITER,
  SET_REVIEWS_GOT_CHUNKS_AMOUNT,
  SET_REVIEWS_LEFT_CHUNKS_AMOUNT,
  SET_OBSERVED_REVIEWS_CHUNKS_AMOUNT,
  SET_REQUESTED_USER_SHAREABLE_ID,
  SET_CURRENT_REVIEW_GOT,
  SET_CURRENT_REVIEW_LEFT
} from './types';

const initialState: InteractionState = {
  isPageLocked: true,
  isSearchPopupVisible: false,
  isLoginPopupVisible: false,
  currentMainToolbarEntry: MainToolbarEntry.ProfilePageMyReviews,
  isObservedReviewsPageLoading: false,
  isProfileAboutTabLoading: true,
  isProfileHistoryTabLoading: true,
  isProfileReviewsTabLoading: true,
  referral: null,
  awaiter: null,
  reviewsGotChunksAmount: 0,
  reviewsLeftChunksAmount: 0,
  observedReviewsChunksAmount: 0,
  requestedUserShareableId: null,
  currentReviewGot: null,
  currentReviewLeft: null
};

export const interactionStateReducer = (
  state = initialState,
  action: InteractionStateActionType
) => {
  switch (action.type) {
    case SET_IS_PAGE_LOCKED:
      return {
        ...state,
        isPageLocked: action.payload
      };
    case SET_IS_OBSERVED_REVIEWS_PAGE_LOADING:
      return {
        ...state,
        isObservedPageVisible: action.payload
      };
    case SET_IS_SEARCH_POPUP_VISIBILE:
      return {
        ...state,
        isSearchPopupVisible: action.payload
      };
    case SET_IS_LOGIN_POPUP_VISIBILE:
      return {
        ...state,
        isLoginPopupVisible: action.payload
      };
    case SET_CURRENT_MAIN_TOOLBAR_ENTRY:
      return {
        ...state,
        currentMainToolbarEntry: action.payload
      };
    case SET_IS_PROFILE_ABOUT_TAB_LOADING:
      return {
        ...state,
        isProfileAboutTabLoading: action.payload
      };
    case SET_IS_PROFILE_HISTORY_TAB_LOADING:
      return {
        ...state,
        isProfileHistoryTabLoading: action.payload
      };
    case SET_IS_PROFILE_REVIEWS_TAB_LOADING:
      return {
        ...state,
        isProfileReviewsTabLoading: action.payload
      };
    case SET_REFERRAL:
      return {
        ...state,
        referral: action.payload
      };
    case SET_AWAITER:
      return {
        ...state,
        awaiter: action.payload
      };
    case SET_REVIEWS_GOT_CHUNKS_AMOUNT:
      return {
        ...state,
        reviewsGotChunksAmount: action.payload
      };
    case SET_REVIEWS_LEFT_CHUNKS_AMOUNT:
      return {
        ...state,
        reviewsLeftChunksAmount: action.payload
      };
    case SET_OBSERVED_REVIEWS_CHUNKS_AMOUNT:
      return {
        ...state,
        observedReviewsChunksAmount: action.payload
      };
    case SET_REQUESTED_USER_SHAREABLE_ID:
      return {
        ...state,
        requestedUserShareableId: action.payload
      };
    case SET_CURRENT_REVIEW_GOT:
      return {
        ...state,
        currentReviewGot: action.payload
      };
    case SET_CURRENT_REVIEW_LEFT:
      return {
        ...state,
        currentReviewLeft: action.payload
      };
    default:
      return state;
  }
};
