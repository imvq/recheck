import { ProfileMenuEntry } from 'utils/enums';
import {
  InteractionState,
  InteractionStateActionType,
  SET_IS_PAGE_LOCKED,
  SET_IS_LOGIN_POPUP_VISIBILE,
  SET_CURRENT_PROFILE_MENU_ENTRY,
  SET_IS_PROFILE_ABOUT_TAB_LOADING,
  SET_IS_PROFILE_HISTORY_TAB_LOADING,
  SET_IS_PROFILE_REVIEWS_TAB_LOADING,
  SET_REVIEWS_GOT_CHUNKS_AMOUNT,
  SET_REVIEWS_LEFT_CHUNKS_AMOUNT,
  SET_CURRENT_REVIEW_GOT,
  SET_CURRENT_REVIEW_LEFT
} from './types';

const initialState: InteractionState = {
  isPageLocked: true,
  isSearchPopupVisible: false,
  isLoginPopupVisible: false,
  currentProfileMenuEntry: ProfileMenuEntry.MyReviews,
  isProfileAboutTabLoading: true,
  isProfileHistoryTabLoading: true,
  isProfileReviewsTabLoading: true,
  reviewsGotChunksAmount: 0,
  reviewsLeftChunksAmount: 0,
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
    case SET_IS_LOGIN_POPUP_VISIBILE:
      return {
        ...state,
        isLoginPopupVisible: action.payload
      };
    case SET_CURRENT_PROFILE_MENU_ENTRY:
      return {
        ...state,
        currentProfileMenuEntry: action.payload
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
