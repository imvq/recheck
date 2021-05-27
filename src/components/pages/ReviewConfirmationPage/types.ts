import * as utilityTypes from 'utils/typing/utility';
import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  isAuthorized: utilityTypes.Nullable<boolean>;
  currentProfileInfo: generalTypes.AppProfileInfo;
}

export interface IDispatchProps {
  unlockPage(): void;
  setIsLoginPopupVisible(flag: boolean): void;
}

export type IProps = IStateProps & IDispatchProps;
