export const CLEAR_INITIAL_DATA = 'CLEAR_INITIAL_DATA';
export const CLEAR_TASKS = 'CLEAR_TASKS';
export const CLEAR_STRENGTHS = 'CLEAR_STRENGTHS';
export const CLEAR_IMPROVEMENTS = 'CLEAR_IMPROVEMENTS';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';
export const CLEAR_LEVEL_DATA = 'CLEAR_LEVEL_DATA';
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

export interface SetLevelComment {
  type: typeof SET_LEVEL_COMMENT;
  payload: string;
}

export interface SetLevelMark {
  type: typeof SET_LEVEL_MARK;
  payload: number;
}

export type ReviewActionType = ClearInitialData
  | ClearTasks
  | ClearStrengths
  | ClearImprovements
  | ClearResults
  | ClearLevelData
  | SetFirstName
  | SetLastName
  | SetCompany
  | SetBounds
  | SetTasks
  | SetStrengths
  | SetImprovements
  | SetResults
  | SetLevelMark
  | SetLevelComment;
