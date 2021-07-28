import { AppProfileInfo, SearchProfileInfo } from 'utils/typing/general';

export interface IOwnProps {
  onClose(): void;
}

export interface IStateProps {
  currentProfileInfo: AppProfileInfo;
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
  setColleagues(colleagues: Omit<SearchProfileInfo, 'company'>[]): void;
  setIsVisible(flag: boolean): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
