import * as generalTypes from 'utils/typing/general';

export const CLEAR_TASKS = 'CLEAR_TASKS';
export const CLEAR_STRENGTHS = 'CLEAR_STRENGTHS';
export const CLEAR_IMPROVEMENTS = 'CLEAR_IMPROVEMENTS';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';
export const CLEAR_LEVEL_DATA = 'CLEAR_LEVEL_DATA';
export const CLEAR_ACTIVITY_DATA = 'CLEAR_ACTIVITY_DATA';
export const CLEAR_OWN_HIRE_OPINION_DATA = 'CLEAR_OWN_HIRE_OPINION_DATA';
export const CLEAR_QUALITY_DATA = 'CLEAR_QUALITY_DATA';
export const CLEAR_LEADERSHIP_DATA = 'CLEAR_LEADERSHIP_DATA';
export const CLEAR_ADVICE_DATA = 'CLEAR_ADVICE_DATA';
export const CLEAR_RECOMMENDERS_DATA = 'CLEAR_RECOMMENDERS_DATA';
export const SET_TARGET_SHAREABLE_ID = 'SET_TARGET_SHAREABLE_ID';
export const SET_TASKS = 'SET_TASKS';
export const SET_STRENGTHS = 'SET_STRENGTHS';
export const SET_IMPROVEMENTS = 'SET_IMPROVEMENTS';
export const SET_RESULTS = 'SET_RESULTS';
export const SET_LEVEL_MARK = 'SET_LEVEL_MARK';
export const SET_LEVEL_COMMENT = 'SET_LEVEL_COMMENT';
export const SET_ACTIVITY_MARK = 'SET_ACTIVITY_MARK';
export const SET_ACTIVITY_COMMENT = 'SET_ACTIVITY_COMMENT';
export const SET_OWN_HIRE_OPINION_MARK = 'SET_OWN_HIRE_OPINION_MARK';
export const SET_OWN_HIRE_OPINION_COMMENT = 'SET_OWN_HIRE_OPINION_COMMENT';
export const SET_QUALITY_MARK = 'SET_QUALITY_MARK';
export const SET_QUALITY_COMMENT = 'SET_QUALITY_COMMENT';
export const SET_LEADERSHIP_MARK = 'SET_LEADERSHIP_MARK';
export const SET_LEADERSHIP_COMMENT = 'SET_LEADERSHIP_COMMENT';
export const SET_ADVICE_COMMENT = 'SET_ADVICE_COMMENT';
export const SET_RECOMMENDER_LINK1 = 'SET_RECOMMENDER_LINK1';
export const SET_RECOMMENDER_LINK2 = 'SET_RECOMMENDER_LINK2';
export const SET_RECOMMENDER_LINK3 = 'SET_RECOMMENDER_LINK3';

export type ReviewState = Omit<generalTypes.ReviewData, 'authorId'>;

export interface ClearTasks {
  type: typeof CLEAR_TASKS;
}

export interface ClearImprovements {
  type: typeof CLEAR_IMPROVEMENTS;
}

export interface ClearStrengths {
  type: typeof CLEAR_STRENGTHS;
}

export interface ClearResults {
  type: typeof CLEAR_RESULTS;
}

export interface ClearLevelData {
  type: typeof CLEAR_LEVEL_DATA;
}

export interface ClearActivityData {
  type: typeof CLEAR_ACTIVITY_DATA;
}

export interface ClearOwnHireOpinionData {
  type: typeof CLEAR_OWN_HIRE_OPINION_DATA;
}

export interface ClearQualityData {
  type: typeof CLEAR_QUALITY_DATA;
}

export interface ClearLeadershipData {
  type: typeof CLEAR_LEADERSHIP_DATA;
}

export interface ClearRecommendersData {
  type: typeof CLEAR_RECOMMENDERS_DATA;
}

export interface ClearAdviceData {
  type: typeof CLEAR_ADVICE_DATA;
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

export interface SetImprovements {
  type: typeof SET_IMPROVEMENTS;
  payload: string;
}

export interface SetResults {
  type: typeof SET_RESULTS;
  payload: string;
}

export interface SetLevelMark {
  type: typeof SET_LEVEL_MARK;
  payload: number;
}

export interface SetLevelComment {
  type: typeof SET_LEVEL_COMMENT;
  payload: string;
}

export interface SetActivityMark {
  type: typeof SET_ACTIVITY_MARK;
  payload: number;
}

export interface SetActivityComment {
  type: typeof SET_ACTIVITY_COMMENT;
  payload: string;
}

export interface SetOwnHireOpinionMark {
  type: typeof SET_OWN_HIRE_OPINION_MARK;
  payload: number;
}

export interface SetOwnHireOpinionComment {
  type: typeof SET_OWN_HIRE_OPINION_COMMENT;
  payload: string;
}

export interface SetQualityMark {
  type: typeof SET_QUALITY_MARK;
  payload: number;
}

export interface SetQualityComment {
  type: typeof SET_QUALITY_COMMENT;
  payload: string;
}

export interface SetLeadershipMark {
  type: typeof SET_LEADERSHIP_MARK;
  payload: number;
}

export interface SetLeadershipComment {
  type: typeof SET_LEADERSHIP_COMMENT;
  payload: string;
}

export interface SetAdviceComment {
  type: typeof SET_ADVICE_COMMENT;
  payload: string;
}

export interface SetRecommenderLink1 {
  type: typeof SET_RECOMMENDER_LINK1;
  payload: string;
}

export interface SetRecommenderLink2 {
  type: typeof SET_RECOMMENDER_LINK2;
  payload: string;
}

export interface SetRecommenderLink3 {
  type: typeof SET_RECOMMENDER_LINK3;
  payload: string;
}

export type ReviewActionType =
  | ClearTasks
  | ClearStrengths
  | ClearImprovements
  | ClearResults
  | ClearLevelData
  | ClearActivityData
  | ClearOwnHireOpinionData
  | ClearQualityData
  | ClearLeadershipData
  | ClearAdviceData
  | ClearRecommendersData
  | SetTargetShareableId
  | SetTasks
  | SetStrengths
  | SetImprovements
  | SetResults
  | SetLevelMark
  | SetLevelComment
  | SetActivityMark
  | SetActivityComment
  | SetOwnHireOpinionMark
  | SetOwnHireOpinionComment
  | SetQualityMark
  | SetQualityComment
  | SetLeadershipMark
  | SetLeadershipComment
  | SetAdviceComment
  | SetRecommenderLink1
  | SetRecommenderLink2
  | SetRecommenderLink3;
