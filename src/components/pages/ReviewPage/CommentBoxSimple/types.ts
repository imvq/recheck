export interface IOwnProps {
  pageLabel: string;
  onStepBack(): void;
  onStepForward(commentToPush: string): void;
  children: string;
}

export interface IStateProps {}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
