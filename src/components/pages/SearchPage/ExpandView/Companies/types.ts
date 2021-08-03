import { IAppProfileInfo, ICompany, ISearchProfileInfo } from 'utils/typing/general';

export interface IOwnProps {
  recommendations: ICompany[];
  loadNextChunkCallback(chunk: number): void;
  onClose(): void;
}

export interface IStateProps {
  currentProfileInfo: IAppProfileInfo;
  recommendedCompaniesShownMembers: ISearchProfileInfo[];
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
  setCurrentObservedUser(user: ISearchProfileInfo): void;
  setIsSearchPopupVisible(flag: boolean): void;
  setRecommendedCompaniesShownMembers(members: ISearchProfileInfo[]): void;
  setRequestedUserShareableId(shareableId: string) : void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
