import { IAppProfileInfo } from 'commons/types/general';
import { MainToolbarEntry } from 'commons/utils/enums';

export interface IStateProps {
  currentProfileInfo: IAppProfileInfo;
  currentMainToolbarEntry: MainToolbarEntry;
}

export type IProps = IStateProps;
