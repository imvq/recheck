import { IDisplayedProfileHeadInfo } from 'commons/types';
import { MainToolbarEntry } from 'commons/types/unions';

export interface IStateProps {
  currentProfileInfo: IDisplayedProfileHeadInfo;
  currentMainToolbarEntry: MainToolbarEntry;
}

export type IProps = IStateProps;
