import { Nullable } from 'utils/types.common';

export interface IOwnProps {
  redirectHomeOnFail?: boolean;
}

export interface IStateProps {
  isAuthorized: Nullable<boolean>;
}

export interface IDispatchProps {
  checkAuthorization: () => void;
  unlockPage: () => void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
