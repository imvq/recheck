import {
  ReviewActionType,
  CLEAR_INITIAL_DATA,
  CLEAR_TASKS,
  CLEAR_STRENGTHS,
  CLEAR_IMPROVEMENTS,
  CLEAR_RESULTS,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_COMPANY,
  SET_BOUNDS,
  SET_TASKS,
  SET_STRENGTHS,
  SET_IMPROVEMENTS,
  SET_RESULTS
} from './types';

export const clearInitialData = (): ReviewActionType => ({
  type: CLEAR_INITIAL_DATA
});

export const clearTasks = (): ReviewActionType => ({
  type: CLEAR_TASKS
});

export const clearImprovements = (): ReviewActionType => ({
  type: CLEAR_IMPROVEMENTS
});

export const clearStrengths = (): ReviewActionType => ({
  type: CLEAR_STRENGTHS
});

export const clearResults = (): ReviewActionType => ({
  type: CLEAR_RESULTS
});

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

export const setReviewImprovements = (payload: string): ReviewActionType => ({
  type: SET_IMPROVEMENTS,
  payload
});

export const setReviewResults = (payload: string): ReviewActionType => ({
  type: SET_RESULTS,
  payload
});
