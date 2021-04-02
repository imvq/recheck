export interface IStateProps {
  isSearchPopupVisible: boolean;
}

export interface IDispatchProps {
  setIsSearchPopupVisible: (newValue: boolean) => void;
}

export type IProps = IStateProps & IDispatchProps;
