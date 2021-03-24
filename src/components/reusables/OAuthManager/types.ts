export type OAuthManagerDispatchProps = {
  lockPage: () => void;
  unlockPage: () => void;
  setIsAuthorized: (value: boolean) => void;
};
