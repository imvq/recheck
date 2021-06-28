import { Dispatch } from 'redux';

import Api from 'utils/api';
import * as generalTypes from 'utils/typing/general';
import { AppActionType } from '../types';
import { setPageUnlocked as unlockPage } from '../interaction/actions';
import {
  SearchActionType,
  SET_MATCHED_COMPANIES,
  SET_RECOMMENDATIONS,
  SET_CURRENT_USER_SEARCH_RESULTS
} from './types';

export const setMatchedCompanies = (results: generalTypes.CompanyReduced[])
  : SearchActionType => ({
  type: SET_MATCHED_COMPANIES,
  payload: results
});

export const clearMatchedCompanies = (): SearchActionType => ({
  type: SET_MATCHED_COMPANIES,
  payload: []
});

export const setRecommendations = (results: generalTypes.Company[])
  : SearchActionType => ({
  type: SET_RECOMMENDATIONS,
  payload: results
});

export const setUserSearchResults = (results: generalTypes.SearchProfileInfo[])
  : SearchActionType => ({
  type: SET_CURRENT_USER_SEARCH_RESULTS,
  payload: results
});

export const searchUser = (name: string) => (dispatch: Dispatch<AppActionType>) => {
  Api.searchUser(name)
    .then((searchResults) => dispatch(setUserSearchResults(searchResults.data.results)))
    .finally(() => dispatch(unlockPage()));
};

export const loadMatchedCompanies = (sequence: string) => (dispatch: Dispatch<AppActionType>) => {
  Api.getMatchedCompanies(sequence)
    .then(matchData => dispatch(setMatchedCompanies(matchData.data.results)));
};

export const loadRecommendations = (chunk: number) => (dispatch: Dispatch<AppActionType>) => {
  Api.getRecommendations(chunk)
    .then((recommendationsDto) => dispatch(setRecommendations(recommendationsDto.data.results)));
};
