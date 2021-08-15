import * as generalTypes from 'commons/types/general';

export interface IStateProps {
  isAuthorized: boolean | null;
  currentProfileInfo: generalTypes.IAppProfileInfo;
}

export interface IDispatchProps {
  unlockPage(): void;
  setIsLoginPopupVisible(flag: boolean): void;
}

export type IProps = IStateProps & IDispatchProps;
