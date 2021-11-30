import { ReactNode } from 'react';

export interface IOwnProps {
  children?: ReactNode;
  hideContentOnLock?: boolean;
}

export interface IStateProps {
  isPageLocked: boolean;
}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
