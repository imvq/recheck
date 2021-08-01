import * as generalTypes from 'utils/typing/general';

export const SET_CURRENT_PROFILE_DATA = 'SET_CURRENT_PROFILE_DATA';

export interface ProfileState {
  currentProfileInfo: generalTypes.IAppProfileInfo;
}

interface SetCurrentProfileData {
  type: typeof SET_CURRENT_PROFILE_DATA;
  payload: generalTypes.IAppProfileInfo;
}

export type ProfileActionType = SetCurrentProfileData;
