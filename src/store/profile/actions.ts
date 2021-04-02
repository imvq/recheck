import { ProfileInfo } from 'utils/types.common';
import { ProfileActionType, SET_CURRENT_PROFILE_DATA } from './types';

export const setCurrentProfileData = (profileInfo: ProfileInfo): ProfileActionType => ({
  type: SET_CURRENT_PROFILE_DATA,
  payload: profileInfo
});
