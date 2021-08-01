import * as generalTypes from 'utils/typing/general';

export const CLEAR_COLLEAGUES = 'CLEAR_COLLEAGUES';
export const SET_COLLEAGUES = 'SET_COLLEAGUES';
export const SET_QUICK_SEARCH_MATCHED_COMPANIES = 'SET_QUICK_SEARCH_MATCHED_COMPANIES';
export const SET_QUICK_SEARCH_MATCHED_USERS = 'SET_QUICK_SEARCH_MATCHED_USERS';
export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';
export const APPEND_RECOMMENDATIONS = 'APPEND_RECOMMENDATIONS';
export const SET_RECOMMENDED_COMPANIES_SHOWN_MEMBERS = 'SET_RECOMMENDED_COMPANIES_SHOWN_MEMBERS';
export const SET_CURRENT_USER_SEARCH_RESULTS = 'SET_CURRENT_USER_SEARCH_RESULTS';
export const SET_CURRENT_OBSERVED_USER = 'SET_CURRENT_OBSERVED_USER';

export interface SearchState {
  colleaguesState: {
    colleagues: Omit<generalTypes.ISearchProfileInfo, 'company'>[];
    areLoaded: boolean;
  }
  quickSearchMatchedCompanies: generalTypes.ICompanyReduced[];
  quickSearchMatchedUsers: generalTypes.ISearchProfileInfo[];
  recommendations: generalTypes.ICompany[];
  recommendedCompaniesShownMembers: generalTypes.ISearchProfileInfo[];
  userSearchResults: { results: generalTypes.ISearchProfileInfo[]; };
  currentObservedUser: generalTypes.ISearchProfileInfo | null;
}

export interface ClearColleagues {
  type: typeof CLEAR_COLLEAGUES;
}

export interface SetColleagues {
  type: typeof SET_COLLEAGUES;
  payload: Omit<generalTypes.ISearchProfileInfo, 'company'>[];
}

export interface SetQuickSearchMatchedCompanies {
  type: typeof SET_QUICK_SEARCH_MATCHED_COMPANIES;
  payload: generalTypes.ICompanyReduced[];
}

export interface SetQuickSearchMatchedUsers {
  type: typeof SET_QUICK_SEARCH_MATCHED_USERS;
  payload: generalTypes.ISearchProfileInfo[];
}

export interface SetRecommendations {
  type: typeof SET_RECOMMENDATIONS;
  payload: generalTypes.ICompany[];
}

export interface AppendRecommendations {
  type: typeof APPEND_RECOMMENDATIONS;
  payload: generalTypes.ICompany[];
}

export interface SetRecommendedCompaniesShownMembers {
  type: typeof SET_RECOMMENDED_COMPANIES_SHOWN_MEMBERS;
  payload: generalTypes.ISearchProfileInfo[];
}

export interface SetCurrentUserSearchResults {
  type: typeof SET_CURRENT_USER_SEARCH_RESULTS;
  payload: generalTypes.ISearchProfileInfo[];
}

export interface SetCurrentObservedUser {
  type: typeof SET_CURRENT_OBSERVED_USER;
  payload: generalTypes.ISearchProfileInfo;
}

export type SearchActionType =
    ClearColleagues
  | SetColleagues
  | SetQuickSearchMatchedCompanies
  | SetQuickSearchMatchedUsers
  | SetRecommendations
  | SetCurrentObservedUser
  | AppendRecommendations
  | SetRecommendedCompaniesShownMembers
  | SetCurrentUserSearchResults;
