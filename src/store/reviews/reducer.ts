import {
  ReviewState,
  ReviewActionType,
  CLEAR_TASKS,
  CLEAR_STRENGTHS,
  CLEAR_RECOMMENDATION_DATA,
  SET_TARGET_SHAREABLE_ID,
  SET_TASKS,
  SET_STRENGTHS,
  SET_RECOMMENDATION,
  SET_RECOMMENDATION_MARK,
} from './types';

const initialState: ReviewState = {
  targetShareableId: '',
  tasks: '',
  strengths: '',
  recommendation: '',
  recommendationMark: 0,
};

export const reviewsReducer = (
  state = initialState,
  action: ReviewActionType
): ReviewState => {
  switch (action.type) {
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
    case CLEAR_RECOMMENDATION_DATA:
      return {
        ...state,
        recommendation: initialState.recommendation,
        recommendationMark: initialState.recommendationMark
      };
    case SET_TARGET_SHAREABLE_ID:
      return {
        ...state,
        targetShareableId: action.payload
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
    case SET_RECOMMENDATION:
      return {
        ...state,
        recommendation: action.payload
      };
    case SET_RECOMMENDATION_MARK:
      return {
        ...state,
        recommendationMark: action.payload
      };
    default:
      return state;
  }
};
