import { Nullable } from 'utils/types.common';

export type IStateProps = {
  isAuthorized: Nullable<boolean>;
};

export type IDispatchProps = {
  lockPage: () => void;
};
