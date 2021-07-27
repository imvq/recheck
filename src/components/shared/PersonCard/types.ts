import * as generalTypes from 'utils/typing/general';
import { MainToolbarEntry } from 'utils/enums';

export interface IOwnProps {
  userData: generalTypes.SearchProfileInfo;
}

export interface IStateProps {
  currentProfileInfo: generalTypes.AppProfileInfo;
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
  setCurrentObservedUser(user: generalTypes.SearchProfileInfo): void;
  setIsSearchPopupVisible(flag: boolean): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
