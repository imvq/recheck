import { AuthActionType } from './auth/types';
import { InteractionStateActionType } from './interaction/types';
import { IAction as IProfileActionType } from './profile/types';
import { ReviewActionType } from './reviews/types';
import { SearchActionType } from './search/types';

export type AppActionType =
   AuthActionType
    | InteractionStateActionType
    | IProfileActionType
    | ReviewActionType
    | SearchActionType;
