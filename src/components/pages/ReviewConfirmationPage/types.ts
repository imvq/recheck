import { IAppProfileInfo } from 'commons/types/general';

export interface IStateProps {
  isAuthorized: boolean | null;
  currentProfileInfo: IAppProfileInfo;
}

export interface IDispatchProps {
  unlockPage(): void;
  setIsLoginPopupVisible(flag: boolean): void;
}

export type IProps = IStateProps & IDispatchProps;
