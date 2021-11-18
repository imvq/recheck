import { ICompany, ICompanyWithMembers, ISearchedProfile } from 'commons/types';

export const CLEAR_COLLEAGUES = 'CLEAR_COLLEAGUES';
export const SET_COLLEAGUES = 'SET_COLLEAGUES';
export const SET_QUICK_SEARCH_MATCHED_COMPANIES = 'SET_QUICK_SEARCH_MATCHED_COMPANIES';
export const SET_QUICK_SEARCH_MATCHED_USERS = 'SET_QUICK_SEARCH_MATCHED_USERS';
export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';
export const APPEND_RECOMMENDATIONS = 'APPEND_RECOMMENDATIONS';
export const SET_RECOMMENDED_COMPANIES_SHOWN_MEMBERS = 'SET_RECOMMENDED_COMPANIES_SHOWN_MEMBERS';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const SET_CURRENT_USER_SEARCH_RESULTS = 'SET_CURRENT_USER_SEARCH_RESULTS';
export const SET_CURRENT_OBSERVED_USER = 'SET_CURRENT_OBSERVED_USER';

export interface SearchState {
  colleaguesState: {
    colleagues: ISearchedProfile[];
    areLoaded: boolean;
  }
  quickSearchMatchedCompanies: ICompany[];
  quickSearchMatchedUsers: ISearchedProfile[];
  recommendations: ICompanyWithMembers[];
  recommendedCompaniesShownMembers: ISearchedProfile[];
  searchText: string;
  userSearchResults: ISearchedProfile[];
  currentObservedUser: ISearchedProfile | null;
}

export interface ClearColleagues {
  type: typeof CLEAR_COLLEAGUES;
}

export interface SetColleagues {
  type: typeof SET_COLLEAGUES;
  payload: ISearchedProfile[];
}

export interface SetQuickSearchMatchedCompanies {
  type: typeof SET_QUICK_SEARCH_MATCHED_COMPANIES;
  payload: ICompany[];
}

export interface SetQuickSearchMatchedUsers {
  type: typeof SET_QUICK_SEARCH_MATCHED_USERS;
  payload: ISearchedProfile[];
}

export interface SetRecommendations {
  type: typeof SET_RECOMMENDATIONS;
  payload: ICompanyWithMembers[];
}

export interface AppendRecommendations {
  type: typeof APPEND_RECOMMENDATIONS;
  payload: ICompanyWithMembers[];
}

export interface SetRecommendedCompaniesShownMembers {
  type: typeof SET_RECOMMENDED_COMPANIES_SHOWN_MEMBERS;
  payload: ISearchedProfile[];
}

export interface SetSearchText {
  type: typeof SET_SEARCH_TEXT;
  payload: string;
}

export interface SetCurrentUserSearchResults {
  type: typeof SET_CURRENT_USER_SEARCH_RESULTS;
  payload: ISearchedProfile[];
}

export interface SetCurrentObservedUser {
  type: typeof SET_CURRENT_OBSERVED_USER;
  payload: ISearchedProfile;
}

export type IAction =
    ClearColleagues
  | SetColleagues
  | SetQuickSearchMatchedCompanies
  | SetQuickSearchMatchedUsers
  | SetRecommendations
  | SetCurrentObservedUser
  | AppendRecommendations
  | SetSearchText
  | SetRecommendedCompaniesShownMembers
  | SetCurrentUserSearchResults;
