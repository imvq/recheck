import * as utilityTypes from 'utils/typing/utility';

export interface IOwnProps {
  redirectHomeOnFail?: boolean;
  redirectHomeOnRegistered?: boolean;
  preventDefaultUnlock?: boolean;
  preventUnlockStrictly?: boolean;
  noConfirmationCheckNeeded?: boolean;
}

export interface IStateProps {
  isAuthorized: utilityTypes.Nullable<boolean>;
}

export interface IDispatchProps {
  checkAuthorization: (
    isRedirectHomeOnregistered: boolean,
    isConfirmationCheckNeeded: boolean
  ) => void;
  unlockPage: () => void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
