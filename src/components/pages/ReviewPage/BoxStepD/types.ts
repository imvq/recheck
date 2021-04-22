import { IProps as IPropsBase } from '../../../shared/BoxBase/types';

export interface IStateProps {
  results: string;
}

export interface IDispatchProps {
  clearImprovements(): void;
  clearResults(): void;
  setResults(value: string): void;
}

export type IProps = IPropsBase
  & { onBack(): void; }
  & IStateProps
  & IDispatchProps;
