import { IProps as IPropsBase } from '../../../shared/BoxBase/types';

export interface IStateProps {
  strengths: string;
}

export interface IDispatchProps {
  clearTasks(): void;
  clearStrengths(): void;
  setStrengths(value: string): void;
}

export type IProps = IPropsBase
  & { onBack(): void; }
  & IStateProps
  & IDispatchProps;
