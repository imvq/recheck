import * as generalTypes from 'commons/types/general';

import { MainToolbarEntry } from 'commons/types/unions';

export interface IStateProps {
  colleaguesState: {
    colleagues: Omit<generalTypes.ISearchProfileInfo, 'company'>[];
    areLoaded: boolean;
  }
  isAuthorized: boolean | null;
  quickSearchMatchedUsers: generalTypes.ISearchProfileInfo[];
  recommendations: generalTypes.ICompany[];
  userSearchResults: generalTypes.ISearchProfileInfo[];
}

export interface IDispatchProps {
  clearColleagues(): void;
  clearMatchedUsers(): void;
  clearSearchText(): void;
  loadMatchedUsers(tokens: string[]): void;
  loadRecommendations(chunk: number): void;
  lockPage(): void;
  searchUser(tokens: string[]): void;
  searchUserByShareableId(shareableId: string): void;
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
  setUserSearchResults(results: generalTypes.ISearchProfileInfo[]): void;
  setRecommendations(companies: generalTypes.ICompany[]): void;
  setRecommendedCompaniesShownMembers(members: generalTypes.ISearchProfileInfo[]): void;
}

export type IProps = IStateProps & IDispatchProps;
