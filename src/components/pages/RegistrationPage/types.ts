export interface IOwnProps {}

export interface IStateProps {
  isAuthenticated: boolean | null;
}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
