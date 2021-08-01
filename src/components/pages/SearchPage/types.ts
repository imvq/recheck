import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  colleaguesState: {
    colleagues: Omit<generalTypes.ISearchProfileInfo, 'company'>[];
    areLoaded: boolean;
  }
  quickSearchMatchedUsers: generalTypes.ISearchProfileInfo[];
  recommendations: generalTypes.ICompany[];
  userSearchResults: { results: generalTypes.ISearchProfileInfo[]; };
}

export interface IDispatchProps {
  clearColleagues(): void;
  clearMatchedUsers(): void;
  loadMatchedUsers(tokens: string[]): void;
  loadRecommendations(chunk: number): void;
  lockPage(): void;
  searchUser(tokens: string[]): void;
  setUserSearchResults(results: generalTypes.ISearchProfileInfo[]): void;
  setRecommendations(companies: generalTypes.ICompany[]): void;
  setRecommendedCompaniesShownMembers(members: generalTypes.ISearchProfileInfo[]): void;
}

export type IProps = IStateProps & IDispatchProps;
