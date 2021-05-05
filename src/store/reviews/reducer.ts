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
  CLEAR_OWN_HIRE_OPINION_DATA,
  CLEAR_QUALITY_DATA,
  CLEAR_LEADERSHIP_DATA,
  CLEAR_ADVICE_DATA,
  CLEAR_RECOMMENDERS_DATA,
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
  SET_ACTIVITY_COMMENT,
  SET_OWN_HIRE_OPINION_MARK,
  SET_OWN_HIRE_OPINION_COMMENT,
  SET_QUALITY_MARK,
  SET_QUALITY_COMMENT,
  SET_LEADERSHIP_MARK,
  SET_LEADERSHIP_COMMENT,
  SET_ADVICE_COMMENT,
  SET_RECOMMENDER_LINK1,
  SET_RECOMMENDER_LINK2,
  SET_RECOMMENDER_LINK3
} from './types';

const initialState: ReviewState = {
  firstName: '',
  lastName: '',
  companyName: '',
  bounds: '',
  tasks: '',
  strengths: '',
  improvements: '',
  results: '',
  levelMark: 0,
  levelComment: '',
  activityMark: 0,
  activityComment: '',
  ownHireOpinionMark: 0,
  ownHireOpinionComment: '',
  qualityMark: 0,
  qualityComment: '',
  leadershipMark: 0,
  leadershipComment: '',
  adviceComment: '',
  recommenderLink1: '',
  recommenderLink2: '',
  recommenderLink3: '',
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
        companyName: initialState.companyName,
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
    case CLEAR_OWN_HIRE_OPINION_DATA:
      return {
        ...state,
        ownHireOpinionMark: initialState.ownHireOpinionMark,
        ownHireOpinionComment: initialState.ownHireOpinionComment
      };
    case CLEAR_QUALITY_DATA:
      return {
        ...state,
        qualityMark: initialState.qualityMark,
        qualityComment: initialState.qualityComment
      };
    case CLEAR_LEADERSHIP_DATA:
      return {
        ...state,
        leadershipMark: initialState.leadershipMark,
        leadershipComment: initialState.leadershipComment
      };
    case CLEAR_ADVICE_DATA:
      return {
        ...state,
        adviceComment: initialState.adviceComment
      };
    case CLEAR_RECOMMENDERS_DATA:
      return {
        ...state,
        recommenderLink1: initialState.recommenderLink1,
        recommenderLink2: initialState.recommenderLink2,
        recommenderLink3: initialState.recommenderLink3,
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
        companyName: action.payload
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
    case SET_OWN_HIRE_OPINION_MARK:
      return {
        ...state,
        ownHireOpinionMark: action.payload
      };
    case SET_OWN_HIRE_OPINION_COMMENT:
      return {
        ...state,
        ownHireOpinionComment: action.payload
      };
    case SET_QUALITY_MARK:
      return {
        ...state,
        qualityMark: action.payload
      };
    case SET_QUALITY_COMMENT:
      return {
        ...state,
        qualityComment: action.payload
      };
    case SET_LEADERSHIP_MARK:
      return {
        ...state,
        leadershipMark: action.payload
      };
    case SET_LEADERSHIP_COMMENT:
      return {
        ...state,
        leadershipComment: action.payload
      };
    case SET_ADVICE_COMMENT:
      return {
        ...state,
        adviceComment: action.payload
      };
    case SET_RECOMMENDER_LINK1:
      return {
        ...state,
        recommenderLink1: action.payload
      };
    case SET_RECOMMENDER_LINK2:
      return {
        ...state,
        recommenderLink2: action.payload
      };
    case SET_RECOMMENDER_LINK3:
      return {
        ...state,
        recommenderLink3: action.payload
      };
    default:
      return state;
  }
};
