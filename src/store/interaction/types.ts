export const SET_IS_PAGE_LOCKED = 'SET_IS_PAGE_LOCKED';
export const SET_IS_SEARCH_POPUP_VISIBILE = 'SET_IS_SEARCH_POPUP_VISIBILE';

export type InteractionState = {
  isPageLocked: boolean;
  isSearchPopupVisible: boolean;
};

export type SetIsPageLocked = {
  type: typeof SET_IS_PAGE_LOCKED;
  payload: boolean;
};

export type SetIsSearchPopupVisible = {
  type: typeof SET_IS_SEARCH_POPUP_VISIBILE;
  payload: boolean;
};

export type InteractionStateActionType =
  SetIsPageLocked
  | SetIsSearchPopupVisible;
