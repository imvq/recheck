import { MainToolbarEntry } from 'commons/types/unions';

export interface IOwnProps {
  className?: string;
}

export interface IStateProps {
  currentMainToolbarEntry: MainToolbarEntry;
  shareableId: string | null;
}

export interface IDispatchProps {
  lockPage(): void;
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
