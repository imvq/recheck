export type OAuthExchangerDispatchProps = {
  lockPage: () => void;
  unlockPage: () => void;
  setIsAuthorized: (value: boolean) => void;
};
