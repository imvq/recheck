import * as GeneralTypes from 'utils/typing/general';
import { ProfileMenuEntry } from 'utils/enums';

export interface IStateProps {
  currentProfileInfo: GeneralTypes.AppProfileInfo;
  currentProfileMenuEntry: ProfileMenuEntry;
}

export type IProps = IStateProps;
