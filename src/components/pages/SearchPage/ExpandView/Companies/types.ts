import { AppProfileInfo, Company, SearchProfileInfo } from 'utils/typing/general';

export interface IOwnProps {
  recommendations: Company[];
  loadNextChunkCallback(chunk: number): void;
  onClose(): void;
}

export interface IStateProps {
  currentProfileInfo: AppProfileInfo;
  recommendedCompaniesShownMembers: SearchProfileInfo[];
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
  setCurrentObservedUser(user: SearchProfileInfo): void;
  setIsSearchPopupVisible(flag: boolean): void;
  setRecommendedCompaniesShownMembers(members: SearchProfileInfo[]): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
