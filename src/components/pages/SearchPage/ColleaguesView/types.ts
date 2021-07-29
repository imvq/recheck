import { AppProfileInfo, SearchProfileInfo } from 'utils/typing/general';

export interface IStateProps {
  colleagues: Omit<SearchProfileInfo, 'company'>[];
  currentProfileInfo: AppProfileInfo;
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
