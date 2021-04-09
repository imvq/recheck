export const CLEAR_INITIAL_DATA = 'CLEAR_INITIAL_DATA';
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_COMPANY = 'SET_COMPANY';
export const SET_BOUNDS = 'SET_BOUNDS';
export const SET_TASKS = 'SET_TASKS';
export const SET_STRENGTHS = 'SET_STRENGTHS';

export interface ReviewState {
  firstName: string;
  lastName: string;
  company: string;
  bounds: string;
  tasks: string;
  strengths: string;
}

export interface ClearInitialData {
  type: typeof CLEAR_INITIAL_DATA;
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

export type ReviewActionType = ClearInitialData
  | SetFirstName
  | SetLastName
  | SetCompany
  | SetBounds
  | SetTasks
  | SetStrengths;
