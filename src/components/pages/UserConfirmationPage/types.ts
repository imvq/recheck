import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  isAuthorized: boolean | null;
  currentProfileInfo: generalTypes.IAppProfileInfo;
}

export interface IDispatchProps {
  setIsLoginPopupVisible(flag: boolean): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
