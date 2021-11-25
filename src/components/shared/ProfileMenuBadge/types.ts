export interface IOwnProps {
  isProfilePageAvailable?: boolean;
}

export interface IStateProps {
  isConfirmed: boolean | null;
  isPageLocked: boolean;
}

export interface IDispatchProps {
  lockPage(): void;
  setIsLoginPopupVisible(flag: boolean): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
