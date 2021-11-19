import { ISearchedProfileBasic } from 'commons/types';

export interface IOwnProps {
  onClose(): void;
}

export interface IStateProps {
  privateToken: string | null;
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
  setColleagues(colleagues: ISearchedProfileBasic[]): void;
  setIsVisible(flag: boolean): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
