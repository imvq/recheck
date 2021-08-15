import * as generalTypes from 'commons/types/general';

export const CLEAR_TASKS = 'CLEAR_TASKS';
export const CLEAR_STRENGTHS = 'CLEAR_STRENGTHS';
export const CLEAR_RECOMMENDATION_DATA = 'CLEAR_RECOMMENDATION';
export const SET_TARGET_SHAREABLE_ID = 'SET_TARGET_SHAREABLE_ID';
export const SET_TASKS = 'SET_TASKS';
export const SET_STRENGTHS = 'SET_STRENGTHS';
export const SET_RECOMMENDATION = 'SET_RECOMMENDATION';
export const SET_RECOMMENDATION_MARK = 'SET_RECOMMENDATION_MARK';

export type ReviewState = Omit<generalTypes.IReviewData, 'authorId'>;

export interface ClearTasks {
  type: typeof CLEAR_TASKS;
}

export interface ClearRecommendationData {
  type: typeof CLEAR_RECOMMENDATION_DATA;
}

export interface ClearStrengths {
  type: typeof CLEAR_STRENGTHS;
}

export interface SetTargetShareableId {
  type: typeof SET_TARGET_SHAREABLE_ID;
  payload: string;
}

export interface SetTasks {
  type: typeof SET_TASKS;
  payload: string;
}

export interface SetStrengths {
  type: typeof SET_STRENGTHS;
  payload: string;
}

export interface SetRecommendation {
  type: typeof SET_RECOMMENDATION;
  payload: string;
}

export interface SetRecommendationMark {
  type: typeof SET_RECOMMENDATION_MARK;
  payload: number;
}

export type ReviewActionType =
  | ClearTasks
  | ClearStrengths
  | ClearRecommendationData
  | SetTargetShareableId
  | SetTasks
  | SetStrengths
  | SetRecommendation
  | SetRecommendationMark;
