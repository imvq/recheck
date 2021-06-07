import { SearchState, SearchActionType, SET_CURRENT_USER_SEARCH_RESULTS } from './types';

const initialState: SearchState = {
  userSearchResults: { results: [] }
};

export function searchReducer(
  state = initialState,
  action: SearchActionType
): SearchState {
  switch (action.type) {
    case SET_CURRENT_USER_SEARCH_RESULTS:
      return {
        ...state,
        userSearchResults: { results: action.payload }
      };
    default:
      return state;
  }
}
