export const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED';

export interface IState {
  isAuthorized: boolean | null;
}

export interface ISetIsAuthorized {
  type: typeof SET_IS_AUTHORIZED;
  payload: boolean;
}

export type IAction = ISetIsAuthorized;
