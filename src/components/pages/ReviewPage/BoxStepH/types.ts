import { IProps as IPropsBase } from '../../../shared/BoxBase/types';

export interface IStateProps {
  qualityMark: number;
  qualityComment: string;
}

export interface IDispatchProps {
  clearOwnHireOpinionData(): void;
  clearQualityData(): void;
  setQualityMark(value: number): void;
  setQualityComment(value: string): void;
}

export type IProps = IPropsBase
  & { onBack(): void; }
  & IStateProps
  & IDispatchProps;
