import { IAppProfileInfo } from 'commons/types/general';

export interface IStateProps {
  isAuthorized: boolean | null;
  currentProfileInfo: IAppProfileInfo;
}

export interface IDispatchProps {
  setIsLoginPopupVisible(flag: boolean): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
