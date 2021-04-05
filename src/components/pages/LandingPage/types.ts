import { Nullable } from 'utils/types.common';

export interface IStateProps {
  isAuthorized: Nullable<boolean>;
  isRegistered: Nullable<boolean>;
}

export interface IDispatchProps {
  setIsRegistered: (isRegistered: boolean) => void;
}

export type IProps = IStateProps & IDispatchProps;
