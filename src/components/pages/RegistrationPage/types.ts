export interface IOwnProps {}

export interface IStateProps {
  socialId: string | null;
}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
