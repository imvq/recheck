export interface IOwnProps {
  onPopupClose(): void;
}

export interface IStateProps {
  isSearchPopupVisible: boolean;
}

export type IProps = IOwnProps & IStateProps;
