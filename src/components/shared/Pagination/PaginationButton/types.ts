import { PaginationDirection } from 'commons/types/unions';

export interface IOwnProps {
  page: number | PaginationDirection;
  callback: (...args: any[]) => void;
  isCurrent: boolean;
  isEnabled: boolean;
}

export type IProps = IOwnProps;
