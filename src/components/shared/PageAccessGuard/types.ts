import { ReactNode } from 'react';

export interface IOwnProps {
  children?: ReactNode;
  hideContentOnLock?: boolean;
  redirectHomeOnFail?: boolean;
}

export interface IStateProps {
  isAuthorized: boolean | null;
  isPageLocked: boolean;
}

export interface IDispatchProps {
  setPageUnlocked: () => void;
  updateAuthorizationStatus: () => void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
