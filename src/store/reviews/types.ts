import { IReviewReceived } from 'commons/types';

export const SET_CURRENT_REVIEW_TARGET_SHAREABLE_ID = 'SET_CURRENT_REVIEW_TARGET_SHAREABLE_ID';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const PUSH_ANSWER = 'PUSH_ANSWER';
export const POP_ANSWER_AND_MARK = 'POP_ANSWER_AND_MARK';
export const PUSH_MARK = 'PUSH_MARK';
export const CLEAR_ANSWERS_AND_MARKS = 'CLEAR_ANSWERS_AND_MARKS';
export const SET_RECEIVED_REVIEWS_AMOUNT = 'SET_RECEIVED_REVIEWS_AMOUNT';
export const SET_LEFT_REVIEWS_AMOUNT = 'SET_LEFT_REVIEWS_AMOUNT';
export const SET_CURRENT_OBSERVED_RECEIVED_REVIEW = 'SET_CURRENT_OBSERVED_RECEIVED_REVIEW';
export const SET_CURRENT_OBSERVED_LEFT_REVIEW = 'SET_CURRENT_OBSERVED_LEFT_REVIEW';

export interface IState {
  currentReviewTargetShareableId: string | null;
  questions: string[];
  answers: string[];
  marks: (number | null)[];
  receivedReviewsAmount: number;
  leftReviewsAmount: number;
  currentObservedReceivedReview: IReviewReceived | null;
  currentObservedLeftReview: IReviewReceived | null;
}

export interface SetCurrentReviewTargetShareableId {
  type: typeof SET_CURRENT_REVIEW_TARGET_SHAREABLE_ID,
  payload: string;
}

export interface SetQuestions {
  type: typeof SET_QUESTIONS,
  payload: string[];
}

export interface PushAnswer {
  type: typeof PUSH_ANSWER,
  payload: string;
}

export interface PushMark {
  type: typeof PUSH_MARK,
  payload: number | null;
}

export interface PopAnswerAndMark {
  type: typeof POP_ANSWER_AND_MARK
}

export interface ClearAnswersAndMarks {
  type: typeof CLEAR_ANSWERS_AND_MARKS
}

export interface SetReceivedReviewsAmount {
  type: typeof SET_RECEIVED_REVIEWS_AMOUNT;
  payload: number;
}

export interface SetLeftReviewsAmount {
  type: typeof SET_LEFT_REVIEWS_AMOUNT;
  payload: number;
}

export interface SetCurrentObservedReceivedReview {
  type: typeof SET_CURRENT_OBSERVED_RECEIVED_REVIEW,
  payload: IReviewReceived
}

export interface SetCurrentObservedLeftReview {
  type: typeof SET_CURRENT_OBSERVED_LEFT_REVIEW,
  payload: IReviewReceived
}

export type IAction =
    SetCurrentReviewTargetShareableId
  | SetQuestions
  | PushAnswer
  | PushMark
  | PopAnswerAndMark
  | ClearAnswersAndMarks
  | SetReceivedReviewsAmount
  | SetLeftReviewsAmount
  | SetCurrentObservedReceivedReview
  | SetCurrentObservedLeftReview;
