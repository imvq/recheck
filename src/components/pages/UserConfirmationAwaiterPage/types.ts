import { AppProfileInfo } from 'utils/typing/general';

export interface IStateProps {
  currentProfileInfo: AppProfileInfo;
}

export interface IDispatchProps {
  lockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
