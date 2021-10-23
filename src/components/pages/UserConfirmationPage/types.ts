export interface IOwnProps {}

export interface IStateProps {
  isAuthorized: boolean | null;
}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
