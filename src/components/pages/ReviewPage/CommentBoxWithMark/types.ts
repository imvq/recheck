import { AppState } from 'store';

export interface IOwnProps {
  page: number;
  labels: string[];
  onNextStep(): void;
  onBack(): void;
  children: string;
}

export interface IStateProps {
  mark: number;
  comment: string;
}

export interface IStatePropsMapped {
  (store: AppState): IStateProps;
}

export interface IDispatchProps {
  clearPrevious(): void;
  clearCurrent(): void;
  setCurrentMark(value: number): void;
  setCurrentComment(value: string): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
