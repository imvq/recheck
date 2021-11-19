export interface IOwnProps {}

export interface IStateProps {
  privateToken: string | null;
  requestedUserShareableId: string | null;
}

export interface IDispatchProps {
  setVisible(flag: boolean): void;
  setIsSearchPopupVisible(flag: boolean): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
