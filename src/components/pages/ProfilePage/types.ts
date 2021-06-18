import * as generalTypes from 'utils/typing/general';
import { MainToolbarEntry } from 'utils/enums';

export interface IStateProps {
  currentProfileInfo: generalTypes.AppProfileInfo;
  currentMainToolbarEntry: MainToolbarEntry;
}

export type IProps = IStateProps;
