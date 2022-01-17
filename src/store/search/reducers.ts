import * as types from './types';

const initialState: types.IState = {
  colleaguesState: {
    colleagues: [],
    areLoaded: false
  },
  quickSearchMatchedCompanies: [],
  quickSearchMatchedUsers: [],
  recommendations: [],
  recommendedCompaniesShownMembers: [],
  searchText: '',
  userSearchResults: []
};

export function searchReducer(state = initialState, action: types.IAction): types.IState {
  switch (action.type) {
    case types.CLEAR_COLLEAGUES:
      return {
        ...state,
        colleaguesState: {
          colleagues: [],
          areLoaded: false
        }
      };
    case types.SET_COLLEAGUES:
      return {
        ...state,
        colleaguesState: {
          colleagues: action.payload,
          areLoaded: true
        }
      };
    case types.SET_QUICK_SEARCH_MATCHED_COMPANIES:
      return {
        ...state,
        quickSearchMatchedCompanies: action.payload
      };
    case types.SET_QUICK_SEARCH_MATCHED_USERS:
      return {
        ...state,
        quickSearchMatchedUsers: action.payload
      };
    case types.SET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.payload
      };
    case types.APPEND_RECOMMENDATIONS: {
      const updatedRecommendations = [
        ...state.recommendations,
        ...action.payload
      ];

      return {
        ...state,
        recommendations: updatedRecommendations
      };
    }
    case types.SET_RECOMMENDED_COMPANIES_SHOWN_MEMBERS:
      return {
        ...state,
        recommendedCompaniesShownMembers: action.payload
      };
    case types.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      };
    case types.SET_CURRENT_USER_SEARCH_RESULTS:
      return {
        ...state,
        userSearchResults: action.payload
      };
    default:
      return state;
  }
}
