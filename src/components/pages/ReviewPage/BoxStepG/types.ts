import { IProps as IPropsBase } from '../../../shared/BoxBase/types';

export interface IStateProps {
  ownHireOpinionMark: number;
  ownHireOpinionComment: string;
}

export interface IDispatchProps {
  clearActivityData(): void;
  clearOwnHireOpinionData(): void;
  setOwnHireOpinionMark(value: number): void;
  setOwnHireOpinionComment(value: string): void;
}

export type IProps = IPropsBase
  & { onBack(): void; }
  & IStateProps
  & IDispatchProps;
