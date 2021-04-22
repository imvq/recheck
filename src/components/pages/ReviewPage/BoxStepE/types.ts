import { IProps as IPropsBase } from '../../../shared/BoxBase/types';

export interface IStateProps {
  levelMark: number;
  levelComment: string;
}

export interface IDispatchProps {
  clearResults(): void;
  clearLevelData(): void;
  setLevelMark(value: number): void;
  setLevelComment(value: string): void;
}

export type IProps = IPropsBase
  & { onBack(): void; }
  & IStateProps
  & IDispatchProps;
