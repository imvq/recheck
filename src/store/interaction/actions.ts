import { ProfileMenuEntry } from 'utils/enums';
import {
  InteractionStateActionType,
  SET_IS_PAGE_LOCKED,
  SET_IS_LOGIN_POPUP_VISIBILE,
  SET_CURRENT_PROFILE_MENU_ENTRY
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
