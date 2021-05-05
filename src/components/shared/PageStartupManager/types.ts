import * as UtilityTypes from 'utils/typing/utility';

export interface IOwnProps {
  redirectHomeOnFail?: boolean;
  preventDefaultUnlock?: boolean;
}

export interface IStateProps {
  isAuthorized: UtilityTypes.Nullable<boolean>;
}

export interface IDispatchProps {
  checkAuthorization: () => void;
  unlockPage: () => void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
