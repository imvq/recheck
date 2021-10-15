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
