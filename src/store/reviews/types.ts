export const CLEAR_INITIAL_DATA = 'CLEAR_INITIAL_DATA';
export const CLEAR_TASKS = 'CLEAR_TASKS';
export const CLEAR_STRENGTHS = 'CLEAR_STRENGTHS';
export const CLEAR_IMPROVEMENTS = 'CLEAR_IMPROVEMENTS';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_COMPANY = 'SET_COMPANY';
export const SET_BOUNDS = 'SET_BOUNDS';
export const SET_TASKS = 'SET_TASKS';
export const SET_STRENGTHS = 'SET_STRENGTHS';
export const SET_IMPROVEMENTS = 'SET_IMPROVEMENTS';
export const SET_RESULTS = 'SET_RESULTS';

export interface ReviewState {
  firstName: string;
  lastName: string;
  company: string;
  bounds: string;
  tasks: string;
  strengths: string;
  improvements: string;
  results: string;
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

export type ReviewActionType = ClearInitialData
  | ClearTasks
  | ClearStrengths
  | ClearImprovements
  | ClearResults
  | SetFirstName
  | SetLastName
  | SetCompany
  | SetBounds
  | SetTasks
  | SetStrengths
  | SetImprovements
  | SetResults;
