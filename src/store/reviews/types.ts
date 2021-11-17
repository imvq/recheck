import { IReviewCreated, IReviewReceived } from 'commons/types';

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const PUSH_ANSWER = 'PUSH_ANSWER';
export const POP_ANSWER = 'POP_ANSWER';
export const PUSH_MARK = 'PUSH_MARK';
export const POP_MARK = 'POP_MARK';
export const CLEAR_ANSWERS_AND_MARKS = 'CLEAR_ANSWERS_AND_MARKS';
export const SET_RECEIVED_REVIEWS_AMOUNT = 'SET_RECEIVED_REVIEWS_AMOUNT';
export const SET_LEFT_REVIEWS_AMOUNT = 'SET_LEFT_REVIEWS_AMOUNT';
export const SET_CURRENT_RECEIVED_REVIEW = 'SET_CURRENT_RECEIVED_REVIEW';
export const SET_CURRENT_CREATED_REVIEW = 'SET_CURRENT_CREATED_REVIEW';

export interface IState {
  currentReviewTargetShareableId: string | null;
  questions: string[];
  answers: string[];
  marks: (number | null)[];
  receivedReviewsAmount: number;
  leftReviewsAmount: number;
  currentReceivedReview: IReviewReceived | null;
  currentCreatedReview: IReviewCreated | null;
}

export interface SetQuestions {
  type: typeof SET_QUESTIONS,
  payload: string[];
}

export interface PushAnswer {
  type: typeof PUSH_ANSWER,
  payload: string;
}

export interface PopAnswer {
  type: typeof POP_ANSWER
}

export interface PushMark {
  type: typeof PUSH_MARK,
  payload: number | null;
}

export interface PopMark {
  type: typeof POP_MARK
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

export interface SetCurrentReceivedReview {
  type: typeof SET_CURRENT_RECEIVED_REVIEW,
  payload: IReviewReceived
}

export interface SetCurrentCreatedReview {
  type: typeof SET_CURRENT_CREATED_REVIEW,
  payload: IReviewCreated
}

export type IAction =
    SetQuestions
  | PushAnswer
  | PopAnswer
  | PushMark
  | PopMark
  | ClearAnswersAndMarks
  | SetReceivedReviewsAmount
  | SetLeftReviewsAmount
  | SetCurrentReceivedReview
  | SetCurrentCreatedReview;
