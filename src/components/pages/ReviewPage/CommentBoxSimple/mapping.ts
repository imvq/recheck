import { AppState } from 'store';
import * as dispatchers from 'store';
import * as types from './types';

export const mapStepAStateToProps = (store: AppState): types.IStateProps => ({
  comment: store.reviews.tasks
});

export const mapStepADispatchToProps: types.IDispatchProps = {
  clearPrevious: () => {},
  clearCurrent: dispatchers.clearTasks,
  setCurrent: dispatchers.setReviewTasks
};

export const mapStepBStateToProps = (store: AppState): types.IStateProps => ({
  comment: store.reviews.strengths
});

export const mapStepBDispatchToProps: types.IDispatchProps = {
  clearPrevious: dispatchers.clearTasks,
  clearCurrent: dispatchers.clearStrengths,
  setCurrent: dispatchers.setReviewStrengths
};

export const mapStepCStateToProps = (store: AppState): types.IStateProps => ({
  comment: store.reviews.improvements
});

export const mapStepCDispatchToProps: types.IDispatchProps = {
  clearPrevious: dispatchers.clearStrengths,
  clearCurrent: dispatchers.clearImprovements,
  setCurrent: dispatchers.setReviewImprovements
};

export const mapStepDStateToProps = (store: AppState): types.IStateProps => ({
  comment: store.reviews.results
});

export const mapStepDDispatchToProps: types.IDispatchProps = {
  clearPrevious: dispatchers.clearImprovements,
  clearCurrent: dispatchers.clearResults,
  setCurrent: dispatchers.setReviewResults
};

export const mapStepJStateToProps = (store: AppState): types.IStateProps => ({
  comment: store.reviews.adviceComment
});

export const mapStepJDispatchToProps: types.IDispatchProps = {
  clearPrevious: dispatchers.clearLeadershipData,
  clearCurrent: dispatchers.clearAdviceData,
  setCurrent: dispatchers.setReviewAdviceComment
};
