import { ICompanyWithMembers, ISearchedProfile } from 'commons/types';

export interface IOwnProps {
  recommendations: ICompanyWithMembers[];
  loadNextChunkCallback(chunk: number): void;
  onClose(): void;
}

export interface IStateProps {
  privateToken: string | null;
  shareableId: string | null;
  recommendedCompaniesShownMembers: ISearchedProfile[];
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
  setIsSearchPopupVisible(flag: boolean): void;
  setIsSpendFreeViewPopupVisible(flag: boolean): void;
  setRecommendedCompaniesShownMembers(members: ISearchedProfile[]): void;
  setRequestedUserShareableId(shareableId: string) : void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
