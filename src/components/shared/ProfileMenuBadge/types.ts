import { Nullable, AppProfileInfo } from 'utils/types.common';

export interface IStateProps {
  isAuthorized: Nullable<boolean>;
}

export interface IDispatchProps {
  lockPage(): void;
  setIsLoginPopupVisible(flag: boolean): void;
  setCurrentProfileInfo(profileInfo: AppProfileInfo): void;
}

export type IProps = IStateProps & IDispatchProps;
