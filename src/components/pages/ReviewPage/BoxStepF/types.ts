import { IProps as IPropsBase } from '../../../shared/BoxBase/types';

export interface IStateProps {
  activityMark: number;
  activityComment: string;
}

export interface IDispatchProps {
  clearLevelData(): void;
  clearActivityData(): void;
  setActivityMark(value: number): void;
  setActivityComment(value: string): void;
}

export type IProps = IPropsBase
  & { onBack(): void; }
  & IStateProps
  & IDispatchProps;
