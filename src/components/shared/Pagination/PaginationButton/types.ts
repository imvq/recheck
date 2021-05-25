import { PaginationDirection } from 'utils/enums';

export interface IOwnProps {
  page: number | PaginationDirection;
  callback: (...args: any[]) => void;
  isCurrent: boolean;
  isEnabled: boolean;
}

export type IProps = IOwnProps;
