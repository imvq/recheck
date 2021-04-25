import { ProfileMenuEntry } from 'utils/enums';

export const SET_IS_PAGE_LOCKED = 'SET_IS_PAGE_LOCKED';
export const SET_IS_SEARCH_POPUP_VISIBILE = 'SET_IS_SEARCH_POPUP_VISIBILE';
export const SET_IS_LOGIN_POPUP_VISIBILE = 'SET_IS_LOGIN_POPUP_VISIBILE';
export const SET_CURRENT_PROFILE_MENU_ENTRY = 'SET_CURRENT_PROFILE_MENU_ENTRY';

export interface InteractionState {
  isPageLocked: boolean;
  isSearchPopupVisible: boolean;
  isLoginPopupVisible: boolean;
  currentProfileMenuEntry: ProfileMenuEntry;
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

export interface SetCurrentMenuProfileEntry {
  type: typeof SET_CURRENT_PROFILE_MENU_ENTRY;
  payload: ProfileMenuEntry;
}

export type InteractionStateActionType =
  SetIsPageLocked
  | SetIsSearchPopupVisible
  | SetIsLoginPopupVisible
  | SetCurrentMenuProfileEntry;
