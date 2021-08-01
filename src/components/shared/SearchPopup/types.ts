import { IAppProfileInfo, ISearchProfileInfo } from 'utils/typing/general';

export interface IOwnProps {
  onClose(): void;
}

export interface IStateProps {
  currentProfileInfo: IAppProfileInfo;
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
  setColleagues(colleagues: Omit<ISearchProfileInfo, 'company'>[]): void;
  setIsVisible(flag: boolean): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
