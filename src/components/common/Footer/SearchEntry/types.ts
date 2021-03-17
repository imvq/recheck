export type SearchEntryProps = {
  onClick?: (...args: any[]) => void;
};

export type SearchEntryDispatchProps = {
  setIsSearchPopupVisible: (newValue: boolean) => void;
};
