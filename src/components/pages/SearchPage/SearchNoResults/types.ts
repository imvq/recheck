export interface IOwnProps {
  isFirstSearch: boolean;
}

export interface IStateProps {
  currentShareableId: string;
}

export type IProps = IOwnProps & IStateProps;
