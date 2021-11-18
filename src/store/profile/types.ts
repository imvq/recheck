export const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED';
export const SET_PRIVATE_TOKEN = 'SET_PRIVATE_TOKEN';
export const SET_SHAREABLE_ID = 'SET_SHAREABLE_ID';
export const SET_SOCIAL_ID = 'SET_SOCIAL_ID';
export const SET_INVITER_SHAREABLE_ID = 'SET_INVITER_SHAREABLE_ID';
export const SET_FULL_NAME = 'SET_FULL_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PHOTO_URL = 'SET_PHOTO_URL';
export const SET_CURRENT_POSITION = 'SET_CURRENT_POSITION';
export const SET_CURRENT_COMPANY = 'SET_CURRENT_COMPANY';
export const SET_CURRENT_WORK_START_PERIOD = 'SET_CURRENT_WORK_START_PERIOD';

export interface IState {
  isAuthorized: boolean | null;
  privateToken: string | null;
  shareableId: string | null;
  socialId: string | null;
  inviterShareableId: string | null;
  fullName: string;
  email: string | null;
  photoUrl: string | null;
  currentPosition: string | null;
  company: { id: string; name: string; } | null;
  currentWorkStartDay: { year: number; month: number; } | null;
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

interface ISetInviterShareableId {
  type: typeof SET_INVITER_SHAREABLE_ID;
  payload: string;
}

interface ISetFullName {
  type: typeof SET_FULL_NAME;
  payload: string;
}

interface ISetEmail {
  type: typeof SET_EMAIL;
  payload: string;
}

interface ISetPhotoUrl {
  type: typeof SET_PHOTO_URL;
  payload: string;
}

interface ISetCurrentPosition {
  type: typeof SET_CURRENT_POSITION;
  payload: string;
}

interface ISetCompany {
  type: typeof SET_CURRENT_COMPANY;
  payload: { id: string; name: string; };
}

interface ISetWorkStartPeriod {
  type: typeof SET_CURRENT_WORK_START_PERIOD;
  payload: { year: number; month: number; };
}

export type IAction =
    ISetIsAuthorized
  | ISetPrivateToken
  | ISetShareableId
  | ISetSocialId
  | ISetInviterShareableId
  | ISetFullName
  | ISetEmail
  | ISetPhotoUrl
  | ISetCurrentPosition
  | ISetCompany
  | ISetWorkStartPeriod;
