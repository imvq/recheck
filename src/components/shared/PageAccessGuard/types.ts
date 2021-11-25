import { ReactNode } from 'react';

export interface IOwnProps {
  children?: ReactNode;
  hideContentOnLock?: boolean;
  forConfirmedUsersOnly?: boolean;
  forUnconfirmedUsersOnly?: boolean;
  preventDefaultUnlock?: boolean;
}

export interface IStateProps {
  isConfirmed: boolean | null;
  isPageLocked: boolean;
}

export interface IDispatchProps {
  setPageUnlocked: () => void;
  updateAuthorizationStatus: () => void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
