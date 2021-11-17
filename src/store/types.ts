import { AuthActionType } from './auth/types';
import { InteractionStateActionType } from './interaction/types';
import { IAction as IProfileActionType } from './profile/types';
import { IAction } from './reviews/types';
import { SearchActionType } from './search/types';

export type AppActionType =
   AuthActionType
    | InteractionStateActionType
    | IProfileActionType
    | IAction
    | SearchActionType;
