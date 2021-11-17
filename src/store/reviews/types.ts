import { ICreatedReviewData, IReceivedReviewData } from 'commons/types';

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
  answers: string[];
  marks: number[];
  receivedReviewsAmount: number;
  leftReviewsAmount: number;
  currentReceivedReview: IReceivedReviewData | null;
  currentCreatedReview: ICreatedReviewData | null;
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
  payload: number;
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
  payload: IReceivedReviewData
}

export interface SetCurrentCreatedReview {
  type: typeof SET_CURRENT_CREATED_REVIEW,
  payload: ICreatedReviewData
}

export type IAction =
    PushAnswer
  | PopAnswer
  | PushMark
  | PopMark
  | ClearAnswersAndMarks
  | SetReceivedReviewsAmount
  | SetLeftReviewsAmount
  | SetCurrentReceivedReview
  | SetCurrentCreatedReview;
