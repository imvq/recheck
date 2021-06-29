export interface IOwnProps {
  isFirstSearch: boolean;
}

export interface IStateProps {
  currentEmail: string;
}

export type IProps = IOwnProps & IStateProps;
