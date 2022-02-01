import { AppState } from 'store';

// Interaction.

export const getIsRedirectedFromOrigin = (state: AppState) => (
  state.misc.isRedirectedFromOrigin
);
export const getIsPageLocked = (state: AppState) => state.misc.isPageLocked;
export const getRequestedUserShareableId = (state: AppState) => (
  state.misc.requestedShareableId
);
export const getCurrentMainToolbarEntry = (state: AppState) => (
  state.misc.currentMainToolbarEntry
);
export const getCurrentUserRole = (state: AppState) => state.misc.currentUserRole;

// Observing.

export const getObservedUsers = (state: AppState) => state.observing.observedUsers;

// Profile.

export const getCurrentPrivateToken = (state: AppState) => state.profile.privateToken;
export const getCurrentShareableId = (state: AppState) => state.profile.shareableId;
export const getCurrentSocialId = (state: AppState) => state.profile.socialId;
export const getInviterShareableId = (state: AppState) => state.profile.inviterShareableId;
export const getCurrentEmail = (state: AppState) => state.profile.email;
export const getFullName = (state: AppState) => state.profile.fullName;
export const getPhotoUrl = (state: AppState) => state.profile.photoUrl;
export const getCurrentPosition = (state: AppState) => state.profile.currentPosition;
export const getCurrentCompanyName = (state: AppState) => state.profile.company?.name;
export const getIsUserConfirmed = (state: AppState) => state.profile.isConfirmed;

// When a user logs in they got a social ID and confirmation status.
// If the login attempt was failed the social ID store field remains null
// but the confirmation status field becomes false.
// Only null values for both mean that authorization is pending.
export const getIsUserAuthenticated = (state: AppState) => (
  (state.profile.socialId === null && state.profile.isConfirmed === null)
    ? null : !!state.profile.socialId
);

// Search.

export const getQuickSearchMatchedUsers = (state: AppState) => state.search.quickSearchMatchedUsers;
export const getQuickSearchMatchedCompanies = (state: AppState) => (
  state.search.quickSearchMatchedCompanies
);
export const getRecommendations = (state: AppState) => state.search.recommendations;
export const getRecommendedCompaniesShownMembers = (store: AppState) => (
  store.search.recommendedCompaniesShownMembers
);
export const getUserSearchResults = (state: AppState) => state.search.userSearchResults;

// Reviews.

export const getCreatedReviewQuestions = (state: AppState) => state.reviews.questions;
export const getCreatedReviewAnswers = (state: AppState) => state.reviews.currentReviewComments;
export const getCreatedReviewMarks = (state: AppState) => state.reviews.currentReviewMarks;
