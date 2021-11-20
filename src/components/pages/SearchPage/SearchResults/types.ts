import { ISearchedProfile } from 'commons/types';

export interface IOwnProps {
  userSearchResults: ISearchedProfile[];
}

export interface IStateProps {
  privateToken: string | null;
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
  setIsSearchPopupVisible(flag: boolean): void;
  setIsSpendFreeViewPopupVisible(flag: boolean): void;
  setRequestedUserShareableId(shareableId: string) : void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
