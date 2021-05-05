import * as GeneralTypes from 'utils/typing/general';
import { ProfileActionType, SET_CURRENT_PROFILE_DATA } from './types';

export const setCurrentProfileInfo = (profileInfo: GeneralTypes.AppProfileInfo)
  : ProfileActionType => ({
  type: SET_CURRENT_PROFILE_DATA,
  payload: profileInfo
});
