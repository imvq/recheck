import * as generalTypes from 'commons/types/general';
import { ProfileActionType, SET_CURRENT_PROFILE_DATA } from './types';

export const setCurrentProfileInfo = (profileInfo: generalTypes.IAppProfileInfo)
  : ProfileActionType => ({
  type: SET_CURRENT_PROFILE_DATA,
  payload: profileInfo
});
