import { combineReducers, createStore } from 'redux';

import { interactionStateReducer } from './interaction/reducers';

const rootReducer = combineReducers({
  interaction: interactionStateReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
  // eslint-disable-next-line no-underscore-dangle
  && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export * from './interaction/actions';
