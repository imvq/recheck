export interface IOwnProps {}

export interface IStateProps {}

export interface IDispatchProps {
  setPageLocked(flag: boolean): void;
  setIsLoginPopupVisible(flag: boolean): void;
  updateAuthorizationStatus(): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
