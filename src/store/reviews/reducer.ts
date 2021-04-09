import {
  ReviewState,
  ReviewActionType,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_COMPANY,
  SET_BOUNDS,
  SET_TASKS,
  SET_STRENGTHS
} from './types';

const initialState: ReviewState = {
  firstName: '',
  lastName: '',
  company: '',
  bounds: '',
  tasks: '',
  strengths: ''
};

export const reviewsReducer = (
  state = initialState,
  action: ReviewActionType
): ReviewState => {
  switch (action.type) {
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
    default:
      return state;
  }
};
