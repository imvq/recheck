import { Dispatch } from 'redux';

import Api from 'utils/api';
import * as GeneralTypes from 'utils/typing/general';
import { AppActionType } from '../types';
import { setPageUnlocked as unlockPage } from '../interaction/actions';
import { SearchActionType, SET_CURRENT_USER_SEARCH_RESULTS } from './types';

export const setUserSearchResults = (results: GeneralTypes.SearchProfileInfo[])
  : SearchActionType => ({
  type: SET_CURRENT_USER_SEARCH_RESULTS,
  payload: results
});

export const searchUser = (name: string) => (dispatch: Dispatch<AppActionType>) => {
  Api.searchUser(name)
    .then((searchResults) => dispatch(setUserSearchResults(searchResults.data)))
    .finally(() => dispatch(unlockPage()));
};