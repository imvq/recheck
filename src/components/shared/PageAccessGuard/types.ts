import { ReactNode } from 'react';

export interface IOwnProps {
  children?: ReactNode;
  hideContentOnLock?: boolean;
  forConfirmedUsersOnly?: boolean;
  forAuthenticatedUsersOnly?: boolean;
  preventDefaultUnlock?: boolean;
}

export interface IStateProps {
  isAuthenticated: boolean | null;
  isConfirmed: boolean | null;
  isPageLocked: boolean;
}

export interface IDispatchProps {
  setIsPageLocked: (flag: boolean) => void;
  updateAuthorizationStatus: () => void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
