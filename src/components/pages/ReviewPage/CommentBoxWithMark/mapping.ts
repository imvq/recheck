import { AppState } from 'store';
import * as dispatchers from 'store';
import * as types from './types';

export const mapStepEStateToProps = (store: AppState): types.IStateProps => ({
  mark: store.reviews.levelMark,
  comment: store.reviews.levelComment
});

export const mapStepEDispatchToProps: types.IDispatchProps = {
  clearPrevious: dispatchers.clearResults,
  clearCurrent: dispatchers.clearLevelData,
  setCurrentMark: dispatchers.setReviewLevelMark,
  setCurrentComment: dispatchers.setReviewLevelComment
};

export const mapStepFStateToProps = (store: AppState): types.IStateProps => ({
  mark: store.reviews.activityMark,
  comment: store.reviews.activityComment
});

export const mapStepFDispatchToProps: types.IDispatchProps = {
  clearPrevious: dispatchers.clearLevelData,
  clearCurrent: dispatchers.clearActivityData,
  setCurrentMark: dispatchers.setReviewActivityMark,
  setCurrentComment: dispatchers.setReviewActivityComment
};

export const mapStepGStateToProps = (store: AppState): types.IStateProps => ({
  mark: store.reviews.ownHireOpinionMark,
  comment: store.reviews.ownHireOpinionComment
});

export const mapStepGDispatchToProps: types.IDispatchProps = {
  clearPrevious: dispatchers.clearActivityData,
  clearCurrent: dispatchers.clearOwnHireOpinionData,
  setCurrentMark: dispatchers.setReviewOwnHireOpinionMark,
  setCurrentComment: dispatchers.setReviewOwnHireOpinionComment
};

export const mapStepHStateToProps = (store: AppState): types.IStateProps => ({
  mark: store.reviews.qualityMark,
  comment: store.reviews.qualityComment
});

export const mapStepHDispatchToProps: types.IDispatchProps = {
  clearPrevious: dispatchers.clearOwnHireOpinionData,
  clearCurrent: dispatchers.clearQualityData,
  setCurrentMark: dispatchers.setReviewQualityMark,
  setCurrentComment: dispatchers.setReviewQualityComment
};

export const mapStepIStateToProps = (store: AppState): types.IStateProps => ({
  mark: store.reviews.leadershipMark,
  comment: store.reviews.leadershipComment
});

export const mapStepIDispatchToProps: types.IDispatchProps = {
  clearPrevious: dispatchers.clearQualityData,
  clearCurrent: dispatchers.clearLeadershipData,
  setCurrentMark: dispatchers.setReviewLeadershipMark,
  setCurrentComment: dispatchers.setReviewLeadershipComment
};
