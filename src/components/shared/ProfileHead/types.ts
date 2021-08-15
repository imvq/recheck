import { IAppProfileInfoReduced } from 'commons/types/general';
import { MainToolbarEntry } from 'commons/utils/enums';

export interface IOwnProps {
  profileInfo: IAppProfileInfoReduced;
  noButtons?: boolean;
}

export interface IDispatchProps {
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
}

export type IProps = IOwnProps & IDispatchProps;
