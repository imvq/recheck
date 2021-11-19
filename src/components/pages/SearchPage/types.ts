import { ICompanyWithMembers, ISearchedProfile, ISearchedProfileBasic } from 'commons/types';

import { MainToolbarEntry } from 'commons/types/unions';

export interface IStateProps {
  colleaguesState: {
    colleagues: ISearchedProfileBasic[];
    areLoaded: boolean;
  }
  isAuthorized: boolean | null;
  quickSearchMatchedUsers: ISearchedProfile[];
  recommendations: ICompanyWithMembers[];
  userSearchResults: ISearchedProfile[];
}

export interface IDispatchProps {
  clearColleagues(): void;
  clearMatchedUsers(): void;
  clearSearchText(): void;
  quickSearchUsersByTokens(tokens: string[]): void;
  loadRecommendations(chunk: number): void;
  lockPage(): void;
  searchUsersByTokens(tokens: string[]): void;
  searchUserByShareableId(shareableId: string): void;
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
  setUserSearchResults(results: ISearchedProfile[]): void;
  setRecommendations(companies: ICompanyWithMembers[]): void;
  setRecommendedCompaniesShownMembers(members: ISearchedProfile[]): void;
}

export type IProps = IStateProps & IDispatchProps;
