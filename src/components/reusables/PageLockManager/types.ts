import { PropsWithChildren } from 'react';

export interface IOwnProps {
  hideContentOnLock?: boolean;
}

export interface IStateProps {
  isPageLocked: boolean;
}

export type IProps = PropsWithChildren<IOwnProps & IStateProps>;
