import { ProfileInfo } from 'utils/types.common';

export interface IDispatchProps {
  lockPage(): void;
  setIsLoginPopupVisible(flag: boolean): void;
  setIsAuthorized(flag: boolean): void;
  setCurrentProfileInfo(profileInfo: ProfileInfo): void;
}

export type IProps = IDispatchProps;
