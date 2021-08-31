import { AppState } from 'store';

export interface IOwnProps {
  page: number;
  onNextStep(): void;
  onBack(): void;
  children: string;
}

export interface IStateProps {
  comment: string;
}

export interface IStatePropsMapped {
  (store: AppState): IStateProps;
}

export interface IDispatchProps {
  clearPrevious: (() => void) | null;
  clearCurrent(): void;
  setCurrent(value: string): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
