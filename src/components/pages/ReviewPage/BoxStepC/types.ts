import { IProps as IPropsBase } from '../BoxBase/types';

export interface IStateProps {
  improvements: string;
}

export interface IDispatchProps {
  clearStrengths(): void;
  clearImprovements(): void;
  setImprovements(value: string): void;
}

export type IProps = IPropsBase
  & { onBack(): void; }
  & IStateProps
  & IDispatchProps;
