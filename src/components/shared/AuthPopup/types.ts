import { IAppProfileInfo } from 'commons/types/general';

export interface IDispatchProps {
  setPageLocked(flag: boolean): void;
  setIsLoginPopupVisible(flag: boolean): void;
  setIsAuthorized(flag: boolean): void;
  setCurrentProfileInfo(profileInfo: IAppProfileInfo): void;
}

export type IProps = IDispatchProps;
