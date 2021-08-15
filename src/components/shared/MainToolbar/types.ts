import { MainToolbarEntry } from 'commons/utils/enums';

export interface IOwnProps {
  className?: string;
}

export interface IStateProps {
  currentMainToolbarEntry: MainToolbarEntry;
}

export interface IDispatchProps {
  lockPage(): void;
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
