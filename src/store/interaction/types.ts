export const SET_IS_PAGE_LOCKED = 'SET_IS_PAGE_LOCKED';
export const SET_IS_SEARCH_POPUP_VISIBILE = 'SET_IS_SEARCH_POPUP_VISIBILE';

export interface InteractionState {
  isPageLocked: boolean;
  isSearchPopupVisible: boolean;
}

export interface SetIsPageLocked {
  type: typeof SET_IS_PAGE_LOCKED;
  payload: boolean;
}

export interface SetIsSearchPopupVisible {
  type: typeof SET_IS_SEARCH_POPUP_VISIBILE;
  payload: boolean;
}

export type InteractionStateActionType =
  SetIsPageLocked
  | SetIsSearchPopupVisible;
