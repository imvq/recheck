import * as generalTypes from 'utils/typing/general';
import { ProfileMenuEntry } from 'utils/enums';

export interface IStateProps {
  currentProfileInfo: generalTypes.AppProfileInfo;
  currentProfileMenuEntry: ProfileMenuEntry;
}

export type IProps = IStateProps;
