import { Nullable } from 'types.common';

export type LoginBadgeStateProps = {
  isAuthorized: Nullable<boolean>;
};

export type LoginBadgeDispatchProps = {
  lockPage: () => void;
};
