import * as utilityTypes from 'utils/typing/utility';

export interface IOwnProps {
  onClick?: (...args: any[]) => void;
}

export interface IStateProps {
  isAuthorized: utilityTypes.Nullable<boolean>;
}

export interface IDispatchProps {
  lockPage(): void;
  setIsSearchPopupVisible(flag: boolean): void;
  setIsLoginPopupVisible(flag: boolean): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
