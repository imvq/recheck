import { Nullable } from 'utils/types.common';

export interface IOwnProps {
  onClick?: (...args: any[]) => void;
}

export interface IStateProps {
  isAuthorized: Nullable<boolean>;
}

export interface IDispatchProps {
  lockPage(): void;
  setIsLoginPopupVisible(flag: boolean): void;
  setIsSearchPopupVisible: (newValue: boolean) => void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
