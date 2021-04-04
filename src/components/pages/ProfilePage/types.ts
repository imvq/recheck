import { ProfileInfo } from 'utils/types.common';
import { ProfileMenuEntry } from 'utils/enums';

export interface IStateProps {
  currentProfileInfo: ProfileInfo;
  currentProfileMenuEntry: ProfileMenuEntry;
}

export type IProps = IStateProps;
