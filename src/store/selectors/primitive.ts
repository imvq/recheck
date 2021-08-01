import { AppState } from 'store';

export function getCurrentShareableId(store: AppState) {
  return store.profile.currentProfileInfo.currentShareableId;
}

export function getQuickSearchMatchedUsers(store: AppState) {
  return store.search.quickSearchMatchedUsers;
}

export function getRecommendedCompaniesShownMembers(store: AppState) {
  return store.search.recommendedCompaniesShownMembers;
}

export function getUserSearchResults(store: AppState) {
  return store.search.userSearchResults;
}
