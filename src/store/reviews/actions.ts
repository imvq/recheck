import {
  ReviewActionType,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_COMPANY,
  SET_BOUNDS,
  SET_TASKS,
  SET_STRENGTHS
} from './types';

export const setReviewFirstName = (payload: string): ReviewActionType => ({
  type: SET_FIRST_NAME,
  payload
});

export const setReviewLastName = (payload: string): ReviewActionType => ({
  type: SET_LAST_NAME,
  payload
});

export const setReviewCompany = (payload: string): ReviewActionType => ({
  type: SET_COMPANY,
  payload
});

export const setReviewBounds = (payload: string): ReviewActionType => ({
  type: SET_BOUNDS,
  payload
});

export const setReviewTasks = (payload: string): ReviewActionType => ({
  type: SET_TASKS,
  payload
});

export const setReviewStrengths = (payload: string): ReviewActionType => ({
  type: SET_STRENGTHS,
  payload
});
