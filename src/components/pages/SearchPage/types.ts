import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  recommendations: generalTypes.Company[];
  userSearchResults: { results : generalTypes.SearchProfileInfo[]; };
}

export interface IDispatchProps {
  loadRecommendations(chunk: number): void;
  lockPage(): void;
  searchUser(name: string): void;
  setRecommendations(companies: generalTypes.Company[]): void;
}

export type IProps = IStateProps & IDispatchProps;
