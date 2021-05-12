import * as GeneralTypes from 'utils/typing/general';
import { SearchActionType, SET_CURRENT_USER_SEARCH_RESULTS } from './types';

export const setSearchUserResults = (results: GeneralTypes.SearchProfileInfo[])
  : SearchActionType => ({
  type: SET_CURRENT_USER_SEARCH_RESULTS,
  payload: results
});
