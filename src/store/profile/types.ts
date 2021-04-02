import { ProfileInfo } from 'utils/types.common';

export const SET_CURRENT_PROFILE_DATA = 'SET_CURRENT_PROFILE_DATA';

export interface ProfileState {
  currentProfileInfo: ProfileInfo
}

interface SetCurrentProfileData {
  type: typeof SET_CURRENT_PROFILE_DATA;
  payload: ProfileInfo;
}

export type ProfileActionType = SetCurrentProfileData;
