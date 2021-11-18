import { ICompany, ICompanyWithMembers, ISearchedProfile } from 'commons/types';

import * as types from './types';

export const clearColleagues = (): types.IAction => ({
  type: types.CLEAR_COLLEAGUES
});

export const setColleagues = (colleagues: ISearchedProfile[]): types.IAction => ({
  type: types.SET_COLLEAGUES,
  payload: colleagues
});

export const setQuickSearchMatchedCompanies = (results: ICompany[]): types.IAction => ({
  type: types.SET_QUICK_SEARCH_MATCHED_COMPANIES,
  payload: results
});

export const setQuickSearchMatchedUsers = (results: ISearchedProfile[]): types.IAction => ({
  type: types.SET_QUICK_SEARCH_MATCHED_USERS,
  payload: results
});

export const clearMatchedCompanies = (): types.IAction => ({
  type: types.SET_QUICK_SEARCH_MATCHED_COMPANIES,
  payload: []
});

export const clearMatchedUsers = (): types.IAction => ({
  type: types.SET_QUICK_SEARCH_MATCHED_USERS,
  payload: []
});

export const setRecommendations = (results: ICompanyWithMembers[]): types.IAction => ({
  type: types.SET_RECOMMENDATIONS,
  payload: results
});

export const appendRecommendations = (results: ICompanyWithMembers[]): types.IAction => ({
  type: types.APPEND_RECOMMENDATIONS,
  payload: results
});

export const setRecommendedCompaniesShownMembers = (
  results: ISearchedProfile[]
): types.IAction => ({
  type: types.SET_RECOMMENDED_COMPANIES_SHOWN_MEMBERS,
  payload: results
});

export const setUserSearchResults = (results: ISearchedProfile[]): types.IAction => ({
  type: types.SET_CURRENT_USER_SEARCH_RESULTS,
  payload: results
});

export const setCurrentObservedUser = (user: ISearchedProfile): types.IAction => ({
  type: types.SET_CURRENT_OBSERVED_USER,
  payload: user
});

export const setSearchText = (text: string): types.IAction => ({
  type: types.SET_SEARCH_TEXT,
  payload: text
});
