import { MainToolbarEntry, UserRole } from 'commons/types/unions';

export interface IOwnProps {
  className?: string;
}

export interface IStateProps {
  currentMainToolbarEntry: MainToolbarEntry;
  currentUserRole: UserRole;
  shareableId: string | null;
}

export interface IDispatchProps {
  setIsPageLocked(flag: boolean): void;
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
