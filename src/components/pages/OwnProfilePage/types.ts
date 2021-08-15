import * as generalTypes from 'commons/types/general';
import { MainToolbarEntry } from 'commons/utils/enums';

export interface IStateProps {
  currentProfileInfo: generalTypes.IAppProfileInfo;
  currentMainToolbarEntry: MainToolbarEntry;
}

export type IProps = IStateProps;
