export interface IOwnProps {
  labels: string[];
  pageLabel: string;
  onStepBack(): void;
  onStepForward(commentToPush: string, marktoPush: number): void;
  children: string;
}

export interface IStateProps {}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
