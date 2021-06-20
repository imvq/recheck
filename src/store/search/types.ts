import * as generalTypes from 'utils/typing/general';

export const SET_MATCHED_COMPANIES = 'SET_MATCHED_COMPANIES';
export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';
export const SET_CURRENT_USER_SEARCH_RESULTS = 'SET_CURRENT_USER_SEARCH_RESULTS';

export interface SearchState {
  matchedCompanies: generalTypes.CompanyReduced[];
  recommendations: generalTypes.Company[];
  userSearchResults: { results: generalTypes.SearchProfileInfo[]; };
}

export interface SetMatchedCompanies {
  type: typeof SET_MATCHED_COMPANIES;
  payload: generalTypes.CompanyReduced[];
}

export interface SetRecommendations {
  type: typeof SET_RECOMMENDATIONS;
  payload: generalTypes.Company[];
}

export interface SetCurrentUserSearchResults {
  type: typeof SET_CURRENT_USER_SEARCH_RESULTS;
  payload: generalTypes.SearchProfileInfo[];
}

export type SearchActionType = SetMatchedCompanies
  | SetRecommendations
  | SetCurrentUserSearchResults;
