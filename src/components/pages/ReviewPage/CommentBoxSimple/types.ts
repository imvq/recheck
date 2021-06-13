import { AppState } from 'store';

export interface IOwnProps {
  page: number;
  onNextStep(): void;
  onBack(): void;
}

export interface IStateProps {
  comment: string;
}

export interface IStatePropsMapped {
  (store: AppState): IStateProps;
}

export interface IDispatchProps {
  clearPrevious(): void;
  clearCurrent(): void;
  setCurrent(value: string): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
