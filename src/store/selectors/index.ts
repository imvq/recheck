import { createSelector } from 'reselect';

import * as primitive from './primitive';

export * from './primitive';

// Profile.

export const getCurrentProfileInfo = createSelector(
  [
    primitive.getFullName,
    primitive.getPhotoUrl,
    primitive.getCurrentPosition,
    primitive.getCurrentCompanyName
  ],
  (fullName, photoUrl, currentPosition, currentCompanyName) => {
    return {
      fullName,
      photoUrl: photoUrl || '',
      currentPosition: currentPosition || '',
      currentCompanyName: currentCompanyName || ''
    };
  }
);

// Search.

export const getQuickSearchMatchedUsersWithoutSelf = createSelector(
  [primitive.getCurrentShareableId, primitive.getQuickSearchMatchedUsers],
  (selfShareableId, matchedUsers) => {
    return matchedUsers.filter(matchedUser => matchedUser.shareableId !== selfShareableId);
  }
);

export const getRecommendedCompaniesShownMembersWithoutSelf = createSelector(
  [primitive.getCurrentShareableId, primitive.getRecommendedCompaniesShownMembers],
  (selfShareableId, members) => {
    return members.filter(member => member.shareableId !== selfShareableId);
  }
);

export const getUserSearchResultsWithoutSelf = createSelector(
  [primitive.getCurrentShareableId, primitive.getUserSearchResults],
  (selfShareableId, searchResults) => {
    return searchResults.filter(user => user.shareableId !== selfShareableId);
  }
);

// Reviews.

export const getUntargetedCreatedReview = createSelector(
  [
    primitive.getCurrentPrivateToken,
    primitive.getCreatedReviewQuestions,
    primitive.getCreatedReviewAnswers,
    primitive.getCreatedReviewMarks
  ],
  (privateToken, questions, comments, marks) => {
    // Private token is guaranteed to be defined when the selector is used.
    return { privateToken: privateToken || '', questions, comments, marks };
  }
);
