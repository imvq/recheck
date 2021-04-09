export const CLEAR_INITIAL_DATA = 'CLEAR_INITIAL_DATA';
export const CLEAR_TASKS = 'CLEAR_TASKS';
export const CLEAR_STRENGTHS = 'CLEAR_STRENGTHS';
export const CLEAR_IMPROVEMENTS = 'CLEAR_IMPROVEMENTS';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';
export const CLEAR_LEVEL_DATA = 'CLEAR_LEVEL_DATA';
export const CLEAR_ACTIVITY_DATA = 'CLEAR_ACTIVITY_DATA';
export const CLEAR_OWN_HIRE_OPINION_DATA = 'CLEAR_OWN_HIRE_OPINION_DATA';
export const CLEAR_QUALITY_DATA = 'CLEAR_QUALITY_DATA';
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_COMPANY = 'SET_COMPANY';
export const SET_BOUNDS = 'SET_BOUNDS';
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

export interface ReviewState {
  firstName: string;
  lastName: string;
  company: string;
  bounds: string;
  tasks: string;
  strengths: string;
  improvements: string;
  results: string;
  levelMark: number;
  levelComment: string;
  activityMark: number;
  activityComment: string;
  ownHireOpinionMark: number;
  ownHireOpinionComment: string;
  qualityMark: number;
  qualityComment: string;
}

export interface ClearInitialData {
  type: typeof CLEAR_INITIAL_DATA;
}

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

export interface SetFirstName {
  type: typeof SET_FIRST_NAME;
  payload: string;
}

export interface SetLastName {
  type: typeof SET_LAST_NAME;
  payload: string;
}

export interface SetCompany {
  type: typeof SET_COMPANY;
  payload: string;
}

export interface SetBounds {
  type: typeof SET_BOUNDS;
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

export type ReviewActionType = ClearInitialData
  | ClearTasks
  | ClearStrengths
  | ClearImprovements
  | ClearResults
  | ClearLevelData
  | ClearActivityData
  | ClearOwnHireOpinionData
  | ClearQualityData
  | SetFirstName
  | SetLastName
  | SetCompany
  | SetBounds
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
  | SetQualityComment;
