import { IAction as IInteractionActions } from './interaction/types';
import { IAction as IProfileActions } from './profile/types';
import { IAction as IReviewsActions } from './reviews/types';
import { IAction as ISearchAction } from './search/types';

export type AppActionType =
    IInteractionActions
  | IProfileActions
  | IReviewsActions
  | ISearchAction;
