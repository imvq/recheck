import thunkMiddlware, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk';

import { combineReducers, createStore, applyMiddleware, compose, Dispatch } from 'redux';

import { miscStateReducer } from './misc/reducers';
import { observingReducer } from './observing/reducers';
import { profileReducer } from './profile/reducers';
import { reviewsReducer } from './reviews/reducer';
import { searchReducer } from './search/reducers';
import { AppActionType } from './types';

/**
 * All store reducers combined to one.
 */
const rootReducer = combineReducers({
  misc: miscStateReducer,
  observing: observingReducer,
  profile: profileReducer,
  reviews: reviewsReducer,
  search: searchReducer
});

/**
 * Application of all the middlewares.
 * If the redux extension is installed, then use its code
 * (which provides functionality of redux compose function
 * + additional stuff for debug and state tracking).
 * Otherwise use default redux compose function.
 */
const composeEnhancers = (window as any)
  .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Type for root reducer. To be used in connections.
 */
export type AppState = ReturnType<typeof rootReducer>;

/**
 * Store object encapsulating all app state.
 */
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(
    thunkMiddlware as ThunkMiddleware<AppState, AppActionType>
  ))
);

export type AppDispatch = Dispatch<AppActionType> & ThunkDispatch<AppState, null, AppActionType>;
