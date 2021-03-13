import {
  InteractionStateActionType,
  SET_IS_SEARCH_POPUP_VISIBILE
} from './types';

export const createSetSearchPopupDisplayStateAC = (state: boolean)
  : InteractionStateActionType => ({
  type: SET_IS_SEARCH_POPUP_VISIBILE,
  payload: state
});
