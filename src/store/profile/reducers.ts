import * as types from './types';

const initialState: types.IState = {
  isConfirmed: null,
  privateToken: null,
  shareableId: null,
  socialId: null,
  inviterShareableId: null,
  fullName: '',
  email: null,
  photoUrl: null,
  currentPosition: null,
  company: null,
  currentWorkStartDay: null
};

export function profileReducer(state = initialState, action: types.IAction): types.IState {
  switch (action.type) {
    case types.SET_IS_CONFIRMED:
      return {
        ...state,
        isConfirmed: action.payload
      };
    case types.SET_SOCIAL_ID:
      return {
        ...state,
        socialId: action.payload
      };
    case types.SET_MANDATORY_BASIC_FIELDS:
      return {
        ...state,
        socialId: action.payload.socialId,
        isConfirmed: action.payload.isConfirmed
      };
    case types.SET_PRIVATE_TOKEN:
      return {
        ...state,
        privateToken: action.payload
      };
    case types.SET_SHAREABLE_ID:
      return {
        ...state,
        shareableId: action.payload
      };

    case types.SET_INVITER_SHAREABLE_ID:
      return {
        ...state,
        inviterShareableId: action.payload
      };
    case types.SET_FULL_NAME:
      return {
        ...state,
        fullName: action.payload
      };
    case types.SET_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case types.SET_PHOTO_URL:
      return {
        ...state,
        photoUrl: action.payload
      };
    case types.SET_CURRENT_POSITION:
      return {
        ...state,
        currentPosition: action.payload
      };
    case types.SET_CURRENT_COMPANY:
      return {
        ...state,
        company: action.payload
      };
    case types.SET_CURRENT_WORK_START_PERIOD:
      return {
        ...state,
        currentWorkStartDay: action.payload
      };
    default: return state;
  }
}
