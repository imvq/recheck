import { AuthActionType } from './auth/types';
import { InteractionStateActionType } from './interaction/types';
import { ProfileActionType } from './profile/types';

export type AppActionType =
   AuthActionType
    | InteractionStateActionType
    | ProfileActionType;
