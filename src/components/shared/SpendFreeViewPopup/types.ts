import { IAppProfileInfo } from 'commons/types/general';

export interface IStateProps {
  currentProfileInfo: IAppProfileInfo;
  requestedUserShareableId: string | null;
}

export interface IDispatchProps {
  setVisible(flag: boolean): void;
  setIsSearchPopupVisible(flag: boolean): void;
}

export type IProps = IStateProps & IDispatchProps;
