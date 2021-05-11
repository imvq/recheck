import * as UtilityTypes from 'utils/typing/utility';

export interface IStateProps {
  isAuthorized: UtilityTypes.Nullable<boolean>;
}

export interface IDispatchProps {
  setIsLoginPopupVisible(flag: boolean): void;
}

export type IProps = IStateProps & IDispatchProps;
