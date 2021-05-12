import * as GeneralTypes from 'utils/typing/general';

export const SET_CURRENT_USER_SEARCH_RESULTS = 'SET_CURRENT_USER_SEARCH_RESULTS';

export interface SearchState {
  userSearchResults: GeneralTypes.SearchProfileInfo[];
}

interface SetCurrentUserSearchResults {
  type: typeof SET_CURRENT_USER_SEARCH_RESULTS;
  payload: GeneralTypes.SearchProfileInfo[];
}

export type SearchActionType = SetCurrentUserSearchResults;
