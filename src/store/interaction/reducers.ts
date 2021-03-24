import {
  InteractionState,
  InteractionStateActionType,
  SET_IS_PAGE_LOCKED,
  SET_IS_SEARCH_POPUP_VISIBILE
} from './types';

const initialState: InteractionState = {
  isPageLocked: false,
  isSearchPopupVisible: false
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
    case SET_IS_SEARCH_POPUP_VISIBILE:
      return {
        ...state,
        isSearchPopupVisible: action.payload
      };
    default:
      return state;
  }
};
