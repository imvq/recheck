import * as UtilityTypes from 'utils/typing/utility';

export interface IOwnProps {
  redirectHomeOnFail?: boolean;
  redirectHomeOnRegistered?: boolean;
  preventDefaultUnlock?: boolean;
  preventUnlockStrictly?: boolean;
  noConfirmationCheckNeeded?: boolean;
}

export interface IStateProps {
  isAuthorized: UtilityTypes.Nullable<boolean>;
}

export interface IDispatchProps {
  checkAuthorization: (
    isRedirectHomeOnregistered: boolean,
    isConfirmationCheckNeeded: boolean
  ) => void;
  unlockPage: () => void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
