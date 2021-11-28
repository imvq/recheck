export interface IOwnProps {}

export interface IStateProps {
  isRedirectedFromOrigin: boolean;
  isAuthenticated: boolean | null;
}

export interface IDispatchProps {
  setIsRedirectedFromOrigin: (flag: boolean) => void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
