import * as types from './types';

export const setQuestions = (questions: string[]): types.IAction => ({
  type: types.SET_QUESTIONS,
  payload: questions
});

export const pushAnswer = (answer: string): types.IAction => ({
  type: types.PUSH_ANSWER,
  payload: answer
});

export const popAnswer = (): types.IAction => ({
  type: types.POP_ANSWER
});

export const pushMark = (mark: number | null): types.IAction => ({
  type: types.PUSH_MARK,
  payload: mark
});

export const popMark = (): types.IAction => ({
  type: types.POP_MARK
});

export const clearAnswersAndMarks = (): types.IAction => ({
  type: types.CLEAR_ANSWERS_AND_MARKS
});

export const setReceivedReviewsAmount = (amount: number): types.IAction => ({
  type: types.SET_RECEIVED_REVIEWS_AMOUNT,
  payload: amount
});

export const setLeftReviewsAmount = (amount: number): types.IAction => ({
  type: types.SET_LEFT_REVIEWS_AMOUNT,
  payload: amount
});
