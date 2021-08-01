import { createSelector } from 'reselect';

import { AppState } from 'store';

export const getCurrentShareableId = (store: AppState) => {
  return store.profile.currentProfileInfo.currentShareableId;
};

export const getRecommendedCompaniesShownMembers = (store: AppState) => {
  return store.search.recommendedCompaniesShownMembers;
};

export const getRecommendedCompaniesShownMembersWithoutSelf = createSelector(
  [getCurrentShareableId, getRecommendedCompaniesShownMembers],
  (selfShareableId, members) => {
    return members.filter(member => member.shareableId !== selfShareableId);
  }
);
