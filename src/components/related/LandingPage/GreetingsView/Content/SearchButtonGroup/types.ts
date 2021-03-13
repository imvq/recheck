export type SearchButtonProps = {
  onClick?: (...args: any[]) => void;
};

export type SearchButtonDispatchProps = {
  setIsSearchPopupVisible: (newValue: boolean) => void;
};
