export type FindButtonProps = {
  onClick?: (...args: any[]) => void;
};

export type FindButtonDispatchProps = {
  setIsSearchPopupVisible: (newValue: boolean) => void;
};
