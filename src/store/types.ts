import { AuthActionType } from './auth/types';
import { InteractionStateActionType } from './interaction/types';
import { ProfileActionType } from './profile/types';
import { ReviewActionType } from './reviews/types';
import { SearchActionType } from './search/types';

export type AppActionType =
   AuthActionType
    | InteractionStateActionType
    | ProfileActionType
    | ReviewActionType
    | SearchActionType;
