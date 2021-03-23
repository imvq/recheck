export type SearchButtonGroupProps = {
  onClick?: (...args: any[]) => void;
};

export type SearchButtonGroupDispatchProps = {
  setIsSearchPopupVisible: (newValue: boolean) => void;
};
