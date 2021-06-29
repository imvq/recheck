import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  isAuthorized: boolean | null;
  isPageLocked: boolean;
}

export interface IDispatchProps {
  lockPage(): void;
  setIsLoginPopupVisible(flag: boolean): void;
  setCurrentProfileInfo(profileInfo: generalTypes.AppProfileInfo): void;
}

export type IProps = IStateProps & IDispatchProps;
