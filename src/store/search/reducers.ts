import {
  SearchState,
  SearchActionType,
  SET_QUICK_SEARCH_MATCHED_COMPANIES,
  SET_QUICK_SEARCH_MATCHED_USERS,
  SET_RECOMMENDATIONS,
  APPEND_RECOMMENDATIONS,
  SET_CURRENT_USER_SEARCH_RESULTS
} from './types';

const initialState: SearchState = {
  quickSearchMatchedCompanies: [],
  quickSearchMatchedUsers: [],
  recommendations: [],
  userSearchResults: { results: [] }
};

export function searchReducer(
  state = initialState,
  action: SearchActionType
): SearchState {
  switch (action.type) {
    case SET_QUICK_SEARCH_MATCHED_COMPANIES:
      return {
        ...state,
        quickSearchMatchedCompanies: action.payload
      };
    case SET_QUICK_SEARCH_MATCHED_USERS:
      return {
        ...state,
        quickSearchMatchedUsers: action.payload
      };
    case SET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.payload
      };
    case APPEND_RECOMMENDATIONS: {
      const updatedRecommendations = [
        ...state.recommendations,
        ...action.payload
      ];

      return {
        ...state,
        recommendations: updatedRecommendations
      };
    }
    case SET_CURRENT_USER_SEARCH_RESULTS:
      return {
        ...state,
        userSearchResults: { results: action.payload }
      };
    default:
      return state;
  }
}
