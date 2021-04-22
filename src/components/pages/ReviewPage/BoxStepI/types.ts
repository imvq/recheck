import { IProps as IPropsBase } from '../../../shared/BoxBase/types';

export interface IStateProps {
  leadershipMark: number;
  leadershipComment: string;
}

export interface IDispatchProps {
  clearQualityData(): void;
  clearLeadershipData(): void;
  setLeadershipMark(value: number): void;
  setLeadershipComment(value: string): void;
}

export type IProps = IPropsBase
  & { onBack(): void; }
  & IStateProps
  & IDispatchProps;
