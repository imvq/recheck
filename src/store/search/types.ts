import * as generalTypes from 'utils/typing/general';

export const SET_CURRENT_USER_SEARCH_RESULTS = 'SET_CURRENT_USER_SEARCH_RESULTS';

export interface SearchState {
  userSearchResults: generalTypes.SearchProfileInfo[];
}

export interface SetCurrentUserSearchResults {
  type: typeof SET_CURRENT_USER_SEARCH_RESULTS;
  payload: generalTypes.SearchProfileInfo[];
}

export type SearchActionType = SetCurrentUserSearchResults;
