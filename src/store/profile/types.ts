import { AppProfileInfo } from 'utils/types.common';

export const SET_CURRENT_PROFILE_DATA = 'SET_CURRENT_PROFILE_DATA';

export interface ProfileState {
  currentProfileInfo: AppProfileInfo
}

interface SetCurrentProfileData {
  type: typeof SET_CURRENT_PROFILE_DATA;
  payload: AppProfileInfo;
}

export type ProfileActionType = SetCurrentProfileData;
