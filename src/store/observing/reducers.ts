import * as types from './types';

const initialState: types.IState = {
  observedUsers: []
};

export function observingReducer(state = initialState, action: types.IAction): types.IState {
  switch (action.type) {
    case types.SET_OBSERVED_USERS:
      return {
        ...state,
        observedUsers: action.payload
      };
    case types.APPEND_OBSERVED_USERS: {
      const updatedObservedUsers = [
        ...state.observedUsers,
        ...action.payload
      ];

      return {
        ...state,
        observedUsers: updatedObservedUsers
      };
    }
    default:
      return state;
  }
}
