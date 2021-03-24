import { Nullable } from 'types.common';

export type SessionManagerStateProps = {
  isAuthorized: Nullable<boolean>;
};

export type SessionManagerDispatchProps = {
  checkAuthorization: () => void;
};
