import * as generalTypes from 'utils/typing/general';

export const SET_CURRENT_PROFILE_DATA = 'SET_CURRENT_PROFILE_DATA';

export interface ProfileState {
  currentProfileInfo: generalTypes.AppProfileInfo;
}

interface SetCurrentProfileData {
  type: typeof SET_CURRENT_PROFILE_DATA;
  payload: generalTypes.AppProfileInfo;
}

export type ProfileActionType = SetCurrentProfileData;
