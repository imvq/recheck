import { IProps as IPropsBase } from '../BoxBase/types';

export interface IStateProps {
  recommenderLink1: string;
  recommenderLink2: string;
  recommenderLink3: string;
}

export interface IDispatchProps {
  clearAdviceData(): void;
  clearRecommendersData(): void;
  setRecommenderLink1(value: string): void;
  setRecommenderLink2(value: string): void;
  setRecommenderLink3(value: string): void;
}

export type IProps = IPropsBase
  & { onBack(): void; }
  & IStateProps
  & IDispatchProps;
