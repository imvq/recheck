import { UserRole } from 'commons/types/unions';

export interface IOwnProps {}

export interface IStateProps {
  privateToken: string | null;
  currentRole: UserRole;
}

export interface IDispatchProps {
  setCurrentRole(role: UserRole): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
