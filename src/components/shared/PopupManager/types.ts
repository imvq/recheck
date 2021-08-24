export interface IOwnProps {
  onPopupClose(): void;
}

export interface IStateProps {
  isSearchPopupVisible: boolean;
  isSpendFreeViewPopupVisible: boolean;
}

export type IProps = IOwnProps & IStateProps;
