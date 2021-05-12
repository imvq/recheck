import { SearchState, SearchActionType, SET_CURRENT_USER_SEARCH_RESULTS } from './types';

const initialState: SearchState = {
  userSearchResults: []
};

export function searchReducer(
  state = initialState,
  action: SearchActionType
): SearchState {
  switch (action.type) {
    case SET_CURRENT_USER_SEARCH_RESULTS:
      return {
        ...state,
        userSearchResults: action.payload
      };
    default:
      return initialState;
  }
}
