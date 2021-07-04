export interface IStateProps {
  isAuthorized: boolean | null;
}

export interface IDispatchProps {
  setIsLoginPopupVisible(flag: boolean): void;
  setReferral(referral: string): void;
  setAwaiter(awaiter: string): void;
}

export type IProps = IStateProps & IDispatchProps;
