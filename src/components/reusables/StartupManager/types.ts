import { Nullable } from 'utils/types.common';

export type StartupManagerOwnProps = {
  redirectHomeOnFail?: boolean;
};

export type StartupManagerStateProps = {
  isAuthorized: Nullable<boolean>;
};

export type StartupManagerDispatchProps = {
  checkAuthorization: () => void;
};
