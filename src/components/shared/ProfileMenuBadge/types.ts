export interface IOwnProps {
  isProfilePageAvailable?: boolean;
}

export interface IStateProps {
  userPhotoUrl: string | null;
  isConfirmed: boolean | null;
  isPageLocked: boolean;
}

export interface IDispatchProps {
  setIsPageLocked(flag: boolean): void;
  setIsLoginPopupVisible(flag: boolean): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
