export interface IOwnProps {
  onClick?: (...args: any[]) => void;
}

export interface IDispatchProps {
  setIsSearchPopupVisible: (newValue: boolean) => void;
}

export type IProps = IOwnProps & IDispatchProps;
