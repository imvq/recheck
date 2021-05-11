import * as UtilityTypes from 'utils/typing/utility';

export interface IOwnProps {
  redirectHomeOnFail?: boolean;
  preventDefaultUnlock?: boolean;
  noConfirmationCheckNeeded?: boolean;
}

export interface IStateProps {
  isAuthorized: UtilityTypes.Nullable<boolean>;
}

export interface IDispatchProps {
  checkAuthorization: (isConfirmationCheckNeeded: boolean) => void;
  unlockPage: () => void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
