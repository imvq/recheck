import * as generalTypes from 'utils/typing/general';
import { MainToolbarEntry } from 'utils/enums';

export interface IOwnProps {
  currentProfileInfo: generalTypes.IAppProfileInfo;
}

export interface IDispatchProps {
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
}

export type IProps = IOwnProps & IDispatchProps;