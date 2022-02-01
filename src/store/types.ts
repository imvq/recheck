import { IAction as IMiscActions } from './misc/types';
import { IAction as IObservingActions } from './observing/types';
import { IAction as IProfileActions } from './profile/types';
import { IAction as IReviewsActions } from './reviews/types';
import { IAction as ISearchAction } from './search/types';

export type AppActionType =
    IMiscActions
  | IObservingActions
  | IProfileActions
  | IReviewsActions
  | ISearchAction;
