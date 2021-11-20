import { IReviewReceived } from 'commons/types';

import * as types from './types';

export const setCurrentReviewTargetShareableId = (shareableId: string): types.IAction => ({
  type: types.SET_CURRENT_REVIEW_TARGET_SHAREABLE_ID,
  payload: shareableId
});

export const setQuestions = (questions: string[]): types.IAction => ({
  type: types.SET_QUESTIONS,
  payload: questions
});

export const pushAnswer = (answer: string): types.IAction => ({
  type: types.PUSH_ANSWER,
  payload: answer
});

export const pushMark = (mark: number | null): types.IAction => ({
  type: types.PUSH_MARK,
  payload: mark
});

export const popAnswerAndMark = (): types.IAction => ({
  type: types.POP_ANSWER_AND_MARK
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

export const setCurrentObservedReceivedReview = (review: IReviewReceived): types.IAction => ({
  type: types.SET_CURRENT_OBSERVED_RECEIVED_REVIEW,
  payload: review
});

export const setCurrentObservedLeftReview = (review: IReviewReceived): types.IAction => ({
  type: types.SET_CURRENT_OBSERVED_LEFT_REVIEW,
  payload: review
});
