import { AppProfileInfo, SearchProfileInfo } from 'utils/typing/general';

export interface IOwnProps {
  userSearchResults: { results : SearchProfileInfo[]; };
}

export interface IStateProps {
  currentProfileInfo: AppProfileInfo;
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
  setCurrentObservedUser(user: SearchProfileInfo): void;
  setIsSearchPopupVisible(flag: boolean): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
