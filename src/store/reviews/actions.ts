import { Dispatch } from 'redux';

import * as generalTypes from 'commons/types/general';

import { apiClient } from 'commons/utils/services';

import { AppActionType } from '../types';
import {
  ReviewActionType,
  CLEAR_TASKS,
  CLEAR_STRENGTHS,
  CLEAR_RECOMMENDATION_DATA,
  SET_TARGET_SHAREABLE_ID,
  SET_TASKS,
  SET_STRENGTHS,
  SET_RECOMMENDATION,
  SET_RECOMMENDATION_MARK
} from './types';

export const clearTasks = (): ReviewActionType => ({
  type: CLEAR_TASKS
});

export const clearRecommendationData = (): ReviewActionType => ({
  type: CLEAR_RECOMMENDATION_DATA
});

export const clearStrengths = (): ReviewActionType => ({
  type: CLEAR_STRENGTHS
});

export const setTargetShareableId = (payload: string): ReviewActionType => ({
  type: SET_TARGET_SHAREABLE_ID,
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

export const setReviewRecommendation = (payload: string): ReviewActionType => ({
  type: SET_RECOMMENDATION,
  payload
});

export const setReviewRecommendationMark = (payload: number): ReviewActionType => ({
  type: SET_RECOMMENDATION_MARK,
  payload
});

export const createReview = (reviewData: generalTypes.IReviewData) => (
  dispatch: Dispatch<AppActionType>
) => {
  apiClient.prepareReview({ ...reviewData });
  dispatch(clearTasks());
  dispatch(clearRecommendationData());
  dispatch(clearStrengths());
};
