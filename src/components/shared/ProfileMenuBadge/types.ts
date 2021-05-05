import * as UtilityTypes from 'utils/typing/utility';
import * as GeneralTypes from 'utils/typing/general';

export interface IStateProps {
  isAuthorized: UtilityTypes.Nullable<boolean>;
}

export interface IDispatchProps {
  lockPage(): void;
  setIsLoginPopupVisible(flag: boolean): void;
  setCurrentProfileInfo(profileInfo: GeneralTypes.AppProfileInfo): void;
}

export type IProps = IStateProps & IDispatchProps;
