import { Dispatch } from 'redux';

import Api from 'utils/api';
import * as generalTypes from 'utils/typing/general';
import { AppActionType } from '../types';
import { setPageUnlocked as unlockPage } from '../interaction/actions';
import {
  SearchActionType,
  SET_QUICK_SEARCH_MATCHED_COMPANIES,
  SET_QUICK_SEARCH_MATCHED_USERS,
  SET_RECOMMENDATIONS,
  APPEND_RECOMMENDATIONS,
  SET_CURRENT_USER_SEARCH_RESULTS
} from './types';

export const setQuickSearchMatchedCompanies = (results: generalTypes.CompanyReduced[])
  : SearchActionType => ({
  type: SET_QUICK_SEARCH_MATCHED_COMPANIES,
  payload: results
});

export const setQuickSearchMatchedUsers = (results: generalTypes.SearchProfileInfo[])
  : SearchActionType => ({
  type: SET_QUICK_SEARCH_MATCHED_USERS,
  payload: results
});

export const clearMatchedCompanies = (): SearchActionType => ({
  type: SET_QUICK_SEARCH_MATCHED_COMPANIES,
  payload: []
});

export const setRecommendations = (results: generalTypes.Company[])
  : SearchActionType => ({
  type: SET_RECOMMENDATIONS,
  payload: results
});

export const appendRecommendations = (results: generalTypes.Company[])
  : SearchActionType => ({
  type: APPEND_RECOMMENDATIONS,
  payload: results
});

export const setUserSearchResults = (results: generalTypes.SearchProfileInfo[])
  : SearchActionType => ({
  type: SET_CURRENT_USER_SEARCH_RESULTS,
  payload: results
});

export const searchUser = (tokens: string[]) => (dispatch: Dispatch<AppActionType>) => {
  Api.searchUser(tokens)
    .then((searchResults) => dispatch(setUserSearchResults(searchResults.data.results)))
    .finally(() => dispatch(unlockPage()));
};

export const loadMatchedCompanies = (sequence: string) => (dispatch: Dispatch<AppActionType>) => {
  Api.getMatchedCompanies(sequence)
    .then(matchData => dispatch(setQuickSearchMatchedCompanies(matchData.data.results)));
};

export const loadRecommendations = (chunk: number) => (dispatch: Dispatch<AppActionType>) => {
  Api.getRecommendations(chunk)
    .then((recommendationsDto) => dispatch(appendRecommendations(recommendationsDto.data.results)));
};
