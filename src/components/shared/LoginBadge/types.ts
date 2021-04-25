import { Nullable, ProfileInfo } from 'utils/types.common';

export interface IStateProps {
  isAuthorized: Nullable<boolean>;
}

export interface IDispatchProps {
  lockPage(): void;
  setIsLoginPopupVisible(flag: boolean): void;
  setCurrentProfileInfo(profileInfo: ProfileInfo): void;
}

export type IProps = IStateProps & IDispatchProps;
