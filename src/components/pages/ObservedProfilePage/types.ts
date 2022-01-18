export interface IOwnProps {}

export interface IStateProps {
  privateToken: string | null;
}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
