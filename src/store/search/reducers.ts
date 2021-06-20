import {
  SearchState,
  SearchActionType,
  SET_MATCHED_COMPANIES,
  SET_RECOMMENDATIONS,
  SET_CURRENT_USER_SEARCH_RESULTS
} from './types';

const initialState: SearchState = {
  matchedCompanies: [],
  recommendations: [],
  userSearchResults: { results: [] }
};

export function searchReducer(
  state = initialState,
  action: SearchActionType
): SearchState {
  switch (action.type) {
    case SET_MATCHED_COMPANIES:
      return {
        ...state,
        matchedCompanies: action.payload
      };
    case SET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.payload
      };
    case SET_CURRENT_USER_SEARCH_RESULTS:
      return {
        ...state,
        userSearchResults: { results: action.payload }
      };
    default:
      return state;
  }
}
