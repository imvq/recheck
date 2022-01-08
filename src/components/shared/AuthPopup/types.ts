import { UserRole } from 'commons/types/unions';

export interface IOwnProps {}

export interface IStateProps {
  currentUserRole: UserRole;
}

export interface IDispatchProps {
  setIsPageLocked(flag: boolean): void;
  setIsLoginPopupVisible(flag: boolean): void;
  setIsRedirectingHomePending(flag: boolean): void;
  setCurrentUserRole(role: UserRole): void;
  updateAuthorizationStatus(): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
