export interface IOwnProps {}

export interface IStateProps {
  isConfirmed: boolean | null;
}

export interface IDispatchProps {
  setIsLoginPopupVisible(flag: boolean): void;
  setInviterShareableId(inviter: string): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
