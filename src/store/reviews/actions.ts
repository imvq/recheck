import {
  ReviewActionType,
  CLEAR_INITIAL_DATA,
  CLEAR_TASKS,
  CLEAR_STRENGTHS,
  CLEAR_IMPROVEMENTS,
  CLEAR_RESULTS,
  CLEAR_LEVEL_DATA,
  CLEAR_ACTIVITY_DATA,
  CLEAR_OWN_HIRE_OPINION_DATA,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_COMPANY,
  SET_BOUNDS,
  SET_TASKS,
  SET_STRENGTHS,
  SET_IMPROVEMENTS,
  SET_RESULTS,
  SET_LEVEL_MARK,
  SET_LEVEL_COMMENT,
  SET_ACTIVITY_MARK,
  SET_ACTIVITY_COMMENT,
  SET_OWN_HIRE_OPINION_MARK,
  SET_OWN_HIRE_OPINION_COMMENT
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

export const clearLevelData = (): ReviewActionType => ({
  type: CLEAR_LEVEL_DATA
});

export const clearActivityData = (): ReviewActionType => ({
  type: CLEAR_ACTIVITY_DATA
});

export const clearOwnHireOpinionData = (): ReviewActionType => ({
  type: CLEAR_OWN_HIRE_OPINION_DATA
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

export const setReviewLevelMark = (payload: number): ReviewActionType => ({
  type: SET_LEVEL_MARK,
  payload
});

export const setReviewLevelComment = (payload: string): ReviewActionType => ({
  type: SET_LEVEL_COMMENT,
  payload
});

export const setReviewActivityMark = (payload: number): ReviewActionType => ({
  type: SET_ACTIVITY_MARK,
  payload
});

export const setReviewActivityComment = (payload: string): ReviewActionType => ({
  type: SET_ACTIVITY_COMMENT,
  payload
});

export const setReviewOwnHireOpinionMark = (payload: number): ReviewActionType => ({
  type: SET_OWN_HIRE_OPINION_MARK,
  payload
});

export const setReviewOwnHireOpinionComment = (payload: string): ReviewActionType => ({
  type: SET_OWN_HIRE_OPINION_COMMENT,
  payload
});
