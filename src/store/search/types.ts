import * as generalTypes from 'utils/typing/general';

export const SET_QUICK_SEARCH_MATCHED_COMPANIES = 'SET_QUICK_SEARCH_MATCHED_COMPANIES';
export const SET_QUICK_SEARCH_MATCHED_USERS = 'SET_QUICK_SEARCH_MATCHED_USERS';
export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';
export const APPEND_RECOMMENDATIONS = 'APPEND_RECOMMENDATIONS';
export const SET_CURRENT_USER_SEARCH_RESULTS = 'SET_CURRENT_USER_SEARCH_RESULTS';

export interface SearchState {
  quickSearchMatchedCompanies: generalTypes.CompanyReduced[];
  quickSearchMatchedUsers: generalTypes.SearchProfileInfo[];
  recommendations: generalTypes.Company[];
  userSearchResults: { results: generalTypes.SearchProfileInfo[]; };
}

export interface SetQuickSearchMatchedCompanies {
  type: typeof SET_QUICK_SEARCH_MATCHED_COMPANIES;
  payload: generalTypes.CompanyReduced[];
}

export interface SetQuickSearchMatchedUsers {
  type: typeof SET_QUICK_SEARCH_MATCHED_USERS;
  payload: generalTypes.SearchProfileInfo[];
}

export interface SetRecommendations {
  type: typeof SET_RECOMMENDATIONS;
  payload: generalTypes.Company[];
}

export interface AppendRecommendations {
  type: typeof APPEND_RECOMMENDATIONS;
  payload: generalTypes.Company[];
}

export interface SetCurrentUserSearchResults {
  type: typeof SET_CURRENT_USER_SEARCH_RESULTS;
  payload: generalTypes.SearchProfileInfo[];
}

export type SearchActionType =
    SetQuickSearchMatchedCompanies
  | SetQuickSearchMatchedUsers
  | SetRecommendations
  | AppendRecommendations
  | SetCurrentUserSearchResults;
