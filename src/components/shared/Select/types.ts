import { PropsWithChildren } from 'react';

export interface IOwnProps {
  placeholder?: string;
}

export type IProps = PropsWithChildren<IOwnProps>;
