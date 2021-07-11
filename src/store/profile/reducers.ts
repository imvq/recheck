import { ProfileState, ProfileActionType, SET_CURRENT_PROFILE_DATA } from './types';

const initialState: ProfileState = {
  currentProfileInfo: {
    currentId: '',
    currentName: '',
    currentEmail: '',
    currentShareableId: '',
    currentPhotoUrl: ''
  }
};

export function profileReducer(
  state = initialState,
  action: ProfileActionType
): ProfileState {
  switch (action.type) {
    case SET_CURRENT_PROFILE_DATA:
      return {
        ...state,
        currentProfileInfo: action.payload
      };
    default:
      return state;
  }
}
