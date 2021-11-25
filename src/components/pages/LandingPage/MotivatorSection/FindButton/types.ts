export interface IStateProps {
  isConfirmed: boolean | null;
}

export interface IDispatchProps {
  lockPage(): void;
  setIsLoginPopupVisible(flag: boolean): void;
}

export type IProps = IStateProps & IDispatchProps;
