import { AppState } from 'store';
import * as dispatchers from 'store';
import * as types from './types';

export const mapStepCStateToProps = (store: AppState): types.IStateProps => ({
  mark: store.reviews.recommendationMark,
  comment: store.reviews.recommendation
});

export const mapStepCDispatchToProps: types.IDispatchProps = {
  clearPrevious: dispatchers.clearStrengths,
  clearCurrent: dispatchers.clearRecommendationData,
  setCurrentMark: dispatchers.setReviewRecommendationMark,
  setCurrentComment: dispatchers.setReviewRecommendation
};
