import { AppState } from 'store';

// Profile.

export function getCurrentPrivateToken(store: AppState) {
  return store.profile.privateToken;
}

export function getCurrentShareableId(store: AppState) {
  return store.profile.shareableId;
}

// Search.

export function getQuickSearchMatchedUsers(store: AppState) {
  return store.search.quickSearchMatchedUsers;
}

export function getRecommendedCompaniesShownMembers(store: AppState) {
  return store.search.recommendedCompaniesShownMembers;
}

export function getUserSearchResults(store: AppState) {
  return store.search.userSearchResults;
}

// Reviews.

export function getCreatedReviewQuestions(store: AppState) {
  return store.reviews.questions;
}

export function getCreatedReviewAnswers(store: AppState) {
  return store.reviews.answers;
}

export function getCreatedReviewMarks(store: AppState) {
  return store.reviews.marks;
}
