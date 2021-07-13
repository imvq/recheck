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
