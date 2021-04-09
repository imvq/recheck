import {
  ReviewState,
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

const initialState: ReviewState = {
  firstName: '',
  lastName: '',
  company: '',
  bounds: '',
  tasks: '',
  strengths: '',
  improvements: '',
  results: ''
};

export const reviewsReducer = (
  state = initialState,
  action: ReviewActionType
): ReviewState => {
  switch (action.type) {
    case CLEAR_INITIAL_DATA:
      return {
        ...state,
        firstName: '',
        lastName: '',
        company: '',
        bounds: ''
      };
    case CLEAR_TASKS:
      return {
        ...state,
        tasks: ''
      };
    case CLEAR_STRENGTHS:
      return {
        ...state,
        strengths: ''
      };
    case CLEAR_IMPROVEMENTS:
      return {
        ...state,
        improvements: ''
      };
    case CLEAR_RESULTS:
      return {
        ...state,
        results: ''
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
    default:
      return state;
  }
};
