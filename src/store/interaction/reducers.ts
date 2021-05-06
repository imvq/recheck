import { ProfileMenuEntry } from 'utils/enums';
import {
  InteractionState,
  InteractionStateActionType,
  SET_IS_PAGE_LOCKED,
  SET_IS_LOGIN_POPUP_VISIBILE,
  SET_CURRENT_PROFILE_MENU_ENTRY
} from './types';

const initialState: InteractionState = {
  isPageLocked: true,
  isSearchPopupVisible: false,
  isLoginPopupVisible: false,
  currentProfileMenuEntry: ProfileMenuEntry.MY_REVIEWS
};

export const interactionStateReducer = (
  state: InteractionState = initialState,
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
    default:
      return state;
  }
};
