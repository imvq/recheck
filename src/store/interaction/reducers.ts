import {
  InteractionState,
  InteractionStateActionType,
  SET_IS_SEARCH_POPUP_VISIBILE
} from './types';

const initialState: InteractionState = {
  isSearchPopupVisible: false
};

export const interactionStateReducer = (
  state: InteractionState = initialState,
  action: InteractionStateActionType
) => {
  switch (action.type) {
    case SET_IS_SEARCH_POPUP_VISIBILE:
      return {
        isSearchPopupVisible: action.payload
      };
    default:
      return state;
  }
};
