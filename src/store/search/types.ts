import * as generalTypes from 'utils/typing/general';

export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';
export const SET_CURRENT_USER_SEARCH_RESULTS = 'SET_CURRENT_USER_SEARCH_RESULTS';

export interface SearchState {
  recommendations: generalTypes.Company[];
  userSearchResults: { results: generalTypes.SearchProfileInfo[]; };
}

export interface SetRecommendations {
  type: typeof SET_RECOMMENDATIONS;
  payload: generalTypes.Company[];
}

export interface SetCurrentUserSearchResults {
  type: typeof SET_CURRENT_USER_SEARCH_RESULTS;
  payload: generalTypes.SearchProfileInfo[];
}

export type SearchActionType = SetRecommendations | SetCurrentUserSearchResults;
