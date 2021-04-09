import { AuthActionType } from './auth/types';
import { InteractionStateActionType } from './interaction/types';
import { ProfileActionType } from './profile/types';
import { ReviewActionType } from './reviews/types';

export type AppActionType =
   AuthActionType
    | InteractionStateActionType
    | ProfileActionType
    | ReviewActionType;
