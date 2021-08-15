import { IAppProfileInfo, ISearchProfileInfo } from 'commons/types/general';

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
  setRequestedUserShareableId(shareableId: string) : void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
