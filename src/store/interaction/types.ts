export const SET_IS_SEARCH_POPUP_VISIBILE = 'SET_IS_SEARCH_POPUP_VISIBILE';

export type InteractionState = {
  isSearchPopupVisible: boolean;
};

export type SetInteractionState = {
  type: typeof SET_IS_SEARCH_POPUP_VISIBILE;
  payload: boolean;
};

export type InteractionStateActionType = SetInteractionState;
