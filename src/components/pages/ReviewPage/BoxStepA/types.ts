import { IProps as IPropsBase } from '../BoxBase/types';

export interface IStateProps {
  tasks: string;
}

export interface IDispatchProps {
  setTasks(value: string): void;
  clearInitialData(): void;
}

export type IProps = IPropsBase
  & { onBack(): void; }
  & IStateProps
  & IDispatchProps;
