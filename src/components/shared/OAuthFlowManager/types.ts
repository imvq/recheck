import { ProfileInfo } from 'utils/types.common';

export interface IDispatchProps {
  lockPage: () => void;
  unlockPage: () => void;
  setIsAuthorized: (isAuthorized: boolean) => void;
  setIsRegistered: (isRegistered: boolean) => void;
  setCurrentProfileInfo: (profileInfo: ProfileInfo) => void;
}

export type IProps = IDispatchProps;
