import {
  ReviewState,
  ReviewActionType,
  CLEAR_INITIAL_DATA,
  CLEAR_TASKS,
  CLEAR_STRENGTHS,
  CLEAR_IMPROVEMENTS,
  CLEAR_RESULTS,
  CLEAR_LEVEL_DATA,
  CLEAR_ACTIVITY_DATA,
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
  SET_ACTIVITY_COMMENT
} from './types';

const initialState: ReviewState = {
  firstName: '',
  lastName: '',
  company: '',
  bounds: '',
  tasks: '',
  strengths: '',
  improvements: '',
  results: '',
  levelMark: 0,
  levelComment: '',
  activityMark: 0,
  activityComment: ''
};

export const reviewsReducer = (
  state = initialState,
  action: ReviewActionType
): ReviewState => {
  switch (action.type) {
    case CLEAR_INITIAL_DATA:
      return {
        ...state,
        firstName: initialState.firstName,
        lastName: initialState.lastName,
        company: initialState.company,
        bounds: initialState.bounds
      };
    case CLEAR_TASKS:
      return {
        ...state,
        tasks: initialState.tasks
      };
    case CLEAR_STRENGTHS:
      return {
        ...state,
        strengths: initialState.strengths
      };
    case CLEAR_IMPROVEMENTS:
      return {
        ...state,
        improvements: initialState.improvements
      };
    case CLEAR_RESULTS:
      return {
        ...state,
        results: initialState.results
      };
    case CLEAR_LEVEL_DATA:
      return {
        ...state,
        levelMark: initialState.levelMark,
        levelComment: initialState.levelComment
      };
    case CLEAR_ACTIVITY_DATA:
      return {
        ...state,
        activityMark: initialState.activityMark,
        activityComment: initialState.activityComment
      };
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload
      };
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: action.payload
      };
    case SET_COMPANY:
      return {
        ...state,
        company: action.payload
      };
    case SET_BOUNDS:
      return {
        ...state,
        bounds: action.payload
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case SET_STRENGTHS:
      return {
        ...state,
        strengths: action.payload
      };
    case SET_IMPROVEMENTS:
      return {
        ...state,
        improvements: action.payload
      };
    case SET_RESULTS:
      return {
        ...state,
        results: action.payload
      };
    case SET_LEVEL_MARK:
      return {
        ...state,
        levelMark: action.payload
      };
    case SET_LEVEL_COMMENT:
      return {
        ...state,
        levelComment: action.payload
      };
    case SET_ACTIVITY_MARK:
      return {
        ...state,
        activityMark: action.payload
      };
    case SET_ACTIVITY_COMMENT:
      return {
        ...state,
        activityComment: action.payload
      };
    default:
      return state;
  }
};
