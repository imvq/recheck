import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  recommendations: generalTypes.Company[];
  userSearchResults: { results : generalTypes.SearchProfileInfo[]; };
}

export interface IDispatchProps {
  loadRecommendations(chunk: number): void;
  lockPage(): void;
  searchUser(tokens: string[]): void;
  setUserSearchResults(results: generalTypes.SearchProfileInfo[]): void;
  setRecommendations(companies: generalTypes.Company[]): void;
}

export type IProps = IStateProps & IDispatchProps;
