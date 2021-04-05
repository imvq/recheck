import { PropsWithChildren } from 'react';

export interface IOwnProps {
  onClickedOutside?: () => void;
}

export type IProps = PropsWithChildren<IOwnProps>;
