import * as GeneralTypes from 'utils/typing/general';

export const SET_CURRENT_PROFILE_DATA = 'SET_CURRENT_PROFILE_DATA';

export interface ProfileState {
  currentProfileInfo: GeneralTypes.AppProfileInfo;
}

interface SetCurrentProfileData {
  type: typeof SET_CURRENT_PROFILE_DATA;
  payload: GeneralTypes.AppProfileInfo;
}

export type ProfileActionType = SetCurrentProfileData;
