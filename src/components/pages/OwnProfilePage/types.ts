import * as generalTypes from 'utils/typing/general';
import { MainToolbarEntry } from 'utils/enums';

export interface IStateProps {
  currentProfileInfo: generalTypes.IAppProfileInfo;
  currentMainToolbarEntry: MainToolbarEntry;
}

export type IProps = IStateProps;
