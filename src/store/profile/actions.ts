import { AppProfileInfo } from 'utils/types.common';
import { ProfileActionType, SET_CURRENT_PROFILE_DATA } from './types';

export const setCurrentProfileInfo = (profileInfo: AppProfileInfo): ProfileActionType => ({
  type: SET_CURRENT_PROFILE_DATA,
  payload: profileInfo
});
