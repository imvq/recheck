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
