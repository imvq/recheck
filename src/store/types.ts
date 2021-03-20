import { AuthActionType } from './auth/types';
import { InteractionStateActionType } from './interaction/types';

export type AppActionType =
   AuthActionType
 | InteractionStateActionType;
