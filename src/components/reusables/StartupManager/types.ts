import { Nullable } from 'types.common';

export type StartupManagerOwnProps = {
  redirectHomeOnFail?: boolean;
};

export type StartupManagerStateProps = {
  isAuthorized: Nullable<boolean>;
};

export type StartupManagerDispatchProps = {
  checkAuthorization: () => void;
};
