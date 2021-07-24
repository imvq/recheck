import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  quickSearchMatchedUsers: generalTypes.SearchProfileInfo[];
  recommendations: generalTypes.Company[];
  userSearchResults: { results: generalTypes.SearchProfileInfo[]; };
}

export interface IDispatchProps {
  clearMatchedUsers(): void;
  loadMatchedUsers(tokens: string[]): void;
  loadRecommendations(chunk: number): void;
  lockPage(): void;
  searchUser(tokens: string[]): void;
  setUserSearchResults(results: generalTypes.SearchProfileInfo[]): void;
  setRecommendations(companies: generalTypes.Company[]): void;
  setRecommendedCompaniesShownMembers(members: generalTypes.SearchProfileInfo[]): void;
}

export type IProps = IStateProps & IDispatchProps;
