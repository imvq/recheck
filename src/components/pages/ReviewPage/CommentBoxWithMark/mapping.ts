import { AppState } from 'store';
import * as dispatchers from 'store';
import * as types from './types';

export const mapStepCStateToProps = (store: AppState): types.IStateProps => ({
  mark: store.reviews.marks[2],
  comment: store.reviews.answers[2]
});

export const mapStepCDispatchToProps: types.IDispatchProps = {
  clearPrevious: dispatchers.popAnswerAndMark,
  clearCurrent: dispatchers.popAnswerAndMark,
  setCurrentMark: dispatchers.pushMark,
  setCurrentComment: dispatchers.pushAnswer
};
