import { ProfileInfo } from 'utils/types.common';

export interface IDispatchProps {
  lockPage: () => void;
  unlockPage: () => void;
  setIsAuthorized: (value: boolean) => void;
  setCurrentProfileInfo: (profileInfo: ProfileInfo) => void;
}

export type IProps = IDispatchProps;
