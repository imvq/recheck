import { IAppProfileInfo, ISearchProfileInfo } from 'utils/typing/general';

export interface IOwnProps {
  userSearchResults: ISearchProfileInfo[];
}

export interface IStateProps {
  currentProfileInfo: IAppProfileInfo;
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
  setCurrentObservedUser(user: ISearchProfileInfo): void;
  setIsSearchPopupVisible(flag: boolean): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
