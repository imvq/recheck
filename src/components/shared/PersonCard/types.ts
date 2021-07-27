import * as generalTypes from 'utils/typing/general';
import { MainToolbarEntry } from 'utils/enums';

export interface IOwnProps {
  userData: generalTypes.SearchProfileInfo;
}

export interface IDispatchProps {
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
  setCurrentObservedUser(user: generalTypes.SearchProfileInfo): void;
  setIsSearchPopupVisible(flag: boolean): void;
}

export type IProps = IOwnProps & IDispatchProps;
