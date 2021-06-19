import { PropsWithChildren } from 'react';

export interface IOwnProps {
  title: string;
  onClose(): void;
}

export type IProps = PropsWithChildren<IOwnProps>;
