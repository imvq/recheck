import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  isAuthorized: boolean | null;
  currentProfileInfo: generalTypes.AppProfileInfo;
  referral: string | null;
}

export interface IDispatchProps {
  unlockPage(): void;
  setIsLoginPopupVisible(flag: boolean): void;
}

export type IProps = IStateProps & IDispatchProps;
