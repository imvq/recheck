import * as types from './types';

export const setIsAuthorized = (isAuthorized: boolean): types.IAction => ({
  type: types.SET_IS_AUTHORIZED,
  payload: isAuthorized
});

export const setPrivateToken = (privateToken: string): types.IAction => ({
  type: types.SET_PRIVATE_TOKEN,
  payload: privateToken
});

export const setShareableId = (shareableId: string): types.IAction => ({
  type: types.SET_SHAREABLE_ID,
  payload: shareableId
});

export const setSocialId = (socialId: string): types.IAction => ({
  type: types.SET_SOCIAL_ID,
  payload: socialId
});

export const setFullName = (fullName: string): types.IAction => ({
  type: types.SET_FULL_NAME,
  payload: fullName
});

export const setEmail = (email: string): types.IAction => ({
  type: types.SET_EMAIL,
  payload: email
});

export const setPhotoUrl = (photoUrl: string): types.IAction => ({
  type: types.SET_PHOTO_URL,
  payload: photoUrl
});

export const setCurrentPosition = (currentPosition: string): types.IAction => ({
  type: types.SET_CURRENT_POSITION,
  payload: currentPosition
});

export const setCurrentCompany = (company: { id: string; name: string; }): types.IAction => ({
  type: types.SET_CURRENT_COMPANY,
  payload: company
});

export const setCurrentWorkStarPeriod = (period: { year: number; month: number; })
  : types.IAction => ({
  type: types.SET_CURRENT_WORK_START_PERIOD,
  payload: period
});
