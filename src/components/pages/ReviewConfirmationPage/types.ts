import * as UtilityTypes from 'utils/typing/utility';
import * as GeneralTypes from 'utils/typing/general';

export interface IStateProps {
  isAuthorized: UtilityTypes.Nullable<boolean>;
  currentProfileInfo: GeneralTypes.AppProfileInfo;
}

export interface IDispatchProps {
  unlockPage(): void;
  setIsLoginPopupVisible(flag: boolean): void;
}

export type IProps = IStateProps & IDispatchProps;
