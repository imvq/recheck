import { Nullable } from 'utils/types.common';

export type LoginBadgeStateProps = {
  isAuthorized: Nullable<boolean>;
};

export type LoginBadgeDispatchProps = {
  lockPage: () => void;
};
