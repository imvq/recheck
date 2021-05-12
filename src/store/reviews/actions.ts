import axios from 'axios';
import { Dispatch } from 'redux';

import Api from 'utils/api';
import * as GeneralTypes from 'utils/typing/general';
import { AppActionType } from '../types';
import {
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

export const clearInitialData = (): ReviewActionType => ({
  type: CLEAR_INITIAL_DATA
});

export const clearTasks = (): ReviewActionType => ({
  type: CLEAR_TASKS
});

export const clearImprovements = (): ReviewActionType => ({
  type: CLEAR_IMPROVEMENTS
});

export const clearStrengths = (): ReviewActionType => ({
  type: CLEAR_STRENGTHS
});

export const clearResults = (): ReviewActionType => ({
  type: CLEAR_RESULTS
});

export const clearLevelData = (): ReviewActionType => ({
  type: CLEAR_LEVEL_DATA
});

export const clearActivityData = (): ReviewActionType => ({
  type: CLEAR_ACTIVITY_DATA
});

export const clearOwnHireOpinionData = (): ReviewActionType => ({
  type: CLEAR_OWN_HIRE_OPINION_DATA
});

export const clearQualityData = (): ReviewActionType => ({
  type: CLEAR_QUALITY_DATA
});

export const clearLeadershipData = (): ReviewActionType => ({
  type: CLEAR_LEADERSHIP_DATA
});

export const clearAdviceData = (): ReviewActionType => ({
  type: CLEAR_ADVICE_DATA
});

export const clearRecommendersData = (): ReviewActionType => ({
  type: CLEAR_RECOMMENDERS_DATA
});

export const setReviewFirstName = (payload: string): ReviewActionType => ({
  type: SET_FIRST_NAME,
  payload
});

export const setReviewLastName = (payload: string): ReviewActionType => ({
  type: SET_LAST_NAME,
  payload
});

export const setReviewCompany = (payload: string): ReviewActionType => ({
  type: SET_COMPANY,
  payload
});

export const setReviewBounds = (payload: string): ReviewActionType => ({
  type: SET_BOUNDS,
  payload
});

export const setReviewTasks = (payload: string): ReviewActionType => ({
  type: SET_TASKS,
  payload
});

export const setReviewStrengths = (payload: string): ReviewActionType => ({
  type: SET_STRENGTHS,
  payload
});

export const setReviewImprovements = (payload: string): ReviewActionType => ({
  type: SET_IMPROVEMENTS,
  payload
});

export const setReviewResults = (payload: string): ReviewActionType => ({
  type: SET_RESULTS,
  payload
});

export const setReviewLevelMark = (payload: number): ReviewActionType => ({
  type: SET_LEVEL_MARK,
  payload
});

export const setReviewLevelComment = (payload: string): ReviewActionType => ({
  type: SET_LEVEL_COMMENT,
  payload
});

export const setReviewActivityMark = (payload: number): ReviewActionType => ({
  type: SET_ACTIVITY_MARK,
  payload
});

export const setReviewActivityComment = (payload: string): ReviewActionType => ({
  type: SET_ACTIVITY_COMMENT,
  payload
});

export const setReviewOwnHireOpinionMark = (payload: number): ReviewActionType => ({
  type: SET_OWN_HIRE_OPINION_MARK,
  payload
});

export const setReviewOwnHireOpinionComment = (payload: string): ReviewActionType => ({
  type: SET_OWN_HIRE_OPINION_COMMENT,
  payload
});

export const setReviewQualityMark = (payload: number): ReviewActionType => ({
  type: SET_QUALITY_MARK,
  payload
});

export const setReviewQualityComment = (payload: string): ReviewActionType => ({
  type: SET_QUALITY_COMMENT,
  payload
});

export const setReviewLeadershipMark = (payload: number): ReviewActionType => ({
  type: SET_LEADERSHIP_MARK,
  payload
});

export const setReviewLeadershipComment = (payload: string): ReviewActionType => ({
  type: SET_LEADERSHIP_COMMENT,
  payload
});

export const setReviewAdviceComment = (payload: string): ReviewActionType => ({
  type: SET_ADVICE_COMMENT,
  payload
});

export const setReviewRecommenderLink1 = (payload: string): ReviewActionType => ({
  type: SET_RECOMMENDER_LINK1,
  payload
});

export const setReviewRecommenderLink2 = (payload: string): ReviewActionType => ({
  type: SET_RECOMMENDER_LINK2,
  payload
});

export const setReviewRecommenderLink3 = (payload: string): ReviewActionType => ({
  type: SET_RECOMMENDER_LINK3,
  payload
});

export const createReview = (reviewData: GeneralTypes.ReviewData) => (
  dispatch: Dispatch<AppActionType>
) => {
  Api.prepareReview({ ...reviewData });
  dispatch(clearInitialData());
  dispatch(clearTasks());
  dispatch(clearImprovements());
  dispatch(clearStrengths());
  dispatch(clearResults());
  dispatch(clearLevelData());
  dispatch(clearActivityData());
  dispatch(clearOwnHireOpinionData());
  dispatch(clearQualityData());
  dispatch(clearLeadershipData());
  dispatch(clearAdviceData());
};
