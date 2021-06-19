import { Dispatch } from 'redux';

import Api from 'utils/api';
import * as generalTypes from 'utils/typing/general';
import { AppActionType } from '../types';
import { setPageUnlocked as unlockPage } from '../interaction/actions';
import { SearchActionType, SET_RECOMMENDATIONS, SET_CURRENT_USER_SEARCH_RESULTS } from './types';

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

export const loadRecommendations = () => (dispatch: Dispatch<AppActionType>) => {
  Api.getRecommendations()
    .then((recommendationsDto) => dispatch(setRecommendations(recommendationsDto.data.results)));
};
