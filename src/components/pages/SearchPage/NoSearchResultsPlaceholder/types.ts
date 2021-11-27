export interface IOwnProps {
  isFirstSearch: boolean;
}

export interface IStateProps {
  shareableId: string | null;
}

export type IProps = IOwnProps & IStateProps;
