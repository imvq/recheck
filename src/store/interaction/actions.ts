import {
  InteractionStateActionType,
  SET_IS_PAGE_LOCKED,
  SET_IS_SEARCH_POPUP_VISIBILE
} from './types';

export const setIsPageLocked = (value: boolean)
  : InteractionStateActionType => ({
  type: SET_IS_PAGE_LOCKED,
  payload: value
});

export const setPageLocked = () => setIsPageLocked(true);
export const setPageUnlocked = () => setIsPageLocked(false);

export const setIsSearchPopupVisible = (value: boolean)
  : InteractionStateActionType => ({
  type: SET_IS_SEARCH_POPUP_VISIBILE,
  payload: value
});
