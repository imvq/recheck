export const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED';
export const SET_PRIVATE_TOKEN = 'SET_PRIVATE_TOKEN';
export const SET_SHAREABLE_ID = 'SET_SHAREABLE_ID';
export const SET_SOCIAL_ID = 'SET_SOCIAL_ID';

export interface IState {
  isAuthorized: boolean | null;
  privateToken: string | null;
  shareableId: string | null;
  socialId: string | null;
}

interface ISetIsAuthorized {
  type: typeof SET_IS_AUTHORIZED;
  payload: boolean;
}

interface ISetPrivateToken {
  type: typeof SET_PRIVATE_TOKEN;
  payload: string;
}

interface ISetShareableId {
  type: typeof SET_SHAREABLE_ID;
  payload: string;
}

interface ISetSocialId {
  type: typeof SET_SOCIAL_ID;
  payload: string;
}

export type IAction =
  ISetIsAuthorized
  | ISetPrivateToken
  | ISetShareableId
  | ISetSocialId;
