import { AppProfileInfo } from 'utils/types.common';
import { ProfileMenuEntry } from 'utils/enums';

export interface IStateProps {
  currentProfileInfo: AppProfileInfo;
  currentProfileMenuEntry: ProfileMenuEntry;
}

export type IProps = IStateProps;
