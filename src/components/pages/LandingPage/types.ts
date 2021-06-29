export interface IDispatchProps {
  setIsLoginPopupVisible(flag: boolean): void;
  setReferral(referral: string): void;
}

export type IProps = IDispatchProps;
