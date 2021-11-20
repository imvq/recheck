import { AppState } from 'store';
import * as dispatchers from 'store';
import * as types from './types';

export const mapStepAStateToProps = (store: AppState): types.IStateProps => ({
  comment: store.reviews.answers[0]
});

export const mapStepADispatchToProps: types.IDispatchProps = {
  clearPrevious: null,
  clearCurrent: dispatchers.popAnswerAndMark,
  setCurrent: dispatchers.pushAnswer
};

export const mapStepBStateToProps = (store: AppState): types.IStateProps => ({
  comment: store.reviews.answers[1]
});

export const mapStepBDispatchToProps: types.IDispatchProps = {
  clearPrevious: dispatchers.clearAnswersAndMarks,
  clearCurrent: dispatchers.clearAnswersAndMarks,
  setCurrent: dispatchers.pushAnswer
};
