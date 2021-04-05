import { PropsWithChildren } from 'react';

export interface IOwnProps {
  isTransparent?: boolean;
}

export type IProps = PropsWithChildren<IOwnProps>;
