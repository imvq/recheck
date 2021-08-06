import { IAppProfileInfoReduced } from 'utils/typing/general';
import { MainToolbarEntry } from 'utils/enums';

export interface IOwnProps {
  profileInfo: IAppProfileInfoReduced;
  noButtons?: boolean;
}

export interface IDispatchProps {
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
}

export type IProps = IOwnProps & IDispatchProps;
