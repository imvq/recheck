import * as types from './types';

const initialState: types.IState = {
  isAuthorized: null,
  privateToken: null,
  shareableId: null,
  socialId: null
};

export function profileReducer(state = initialState, action: types.IAction): types.IState {
  switch (action.type) {
    case types.SET_IS_AUTHORIZED:
      return {
        ...state,
        isAuthorized: action.payload
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
    case types.SET_SOCIAL_ID:
      return {
        ...state,
        socialId: action.payload
      };
    default: return state;
  }
}
