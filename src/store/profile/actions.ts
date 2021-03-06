import * as types from './types';

export const setIsConfirmed = (isConfirmed: boolean): types.IAction => ({
  type: types.SET_IS_CONFIRMED,
  payload: isConfirmed
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

export const setMandatoryBasicFields = (socialId: string, isConfirmed: boolean): types.IAction => ({
  type: types.SET_MANDATORY_BASIC_FIELDS,
  payload: { socialId, isConfirmed }
});

export const setInviterShareableId = (inviterShareableId: string): types.IAction => ({
  type: types.SET_INVITER_SHAREABLE_ID,
  payload: inviterShareableId
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

export const setCurrentCompany = (company: { id: number | string; name: string; })
  : types.IAction => ({
  type: types.SET_CURRENT_COMPANY,
  payload: company
});

export const setCurrentWorkStarPeriod = (period: { year: number; month: number; })
  : types.IAction => ({
  type: types.SET_CURRENT_WORK_START_PERIOD,
  payload: period
});
