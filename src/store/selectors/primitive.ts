import { AppState } from 'store';

// Profile.

export const getCurrentPrivateToken = (store: AppState) => store.profile.privateToken;
export const getCurrentShareableId = (store: AppState) => store.profile.shareableId;
export const getFullName = (store: AppState) => store.profile.fullName;
export const getPhotoUrl = (store: AppState) => store.profile.photoUrl;
export const getCurrentPosition = (store: AppState) => store.profile.currentPosition;
export const getCurrentCompanyName = (store: AppState) => store.profile.company?.name;

// When a user logs in they got a social ID and confirmation status.
// If the login attempt was failed the social ID store field remains null
// but the confirmation status field becomes false.
// Only null values for both mean that authorization is pending.
export const getIsUserAuthenticated = (store: AppState) => (
  (store.profile.socialId === null && store.profile.isConfirmed === null)
    ? null : !!store.profile.socialId
);

// Search.

export const getQuickSearchMatchedUsers = (store: AppState) => store.search.quickSearchMatchedUsers;
export const getRecommendedCompaniesShownMembers = (store: AppState) => (
  store.search.recommendedCompaniesShownMembers
);
export const getUserSearchResults = (store: AppState) => store.search.userSearchResults;

// Reviews.

export const getCreatedReviewQuestions = (store: AppState) => store.reviews.questions;
export const getCreatedReviewAnswers = (store: AppState) => store.reviews.currentReviewComments;
export const getCreatedReviewMarks = (store: AppState) => store.reviews.currentReviewMarks;
