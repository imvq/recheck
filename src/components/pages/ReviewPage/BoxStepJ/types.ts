import { IProps as IPropsBase } from '../BoxBase/types';

export interface IStateProps {
  adviceComment: string;
}

export interface IDispatchProps {
  clearLeadershipData(): void;
  clearAdviceData(): void;
  setAdviceComment(value: string): void;
}

export type IProps = IPropsBase
  & { onBack(): void; }
  & IStateProps
  & IDispatchProps;
