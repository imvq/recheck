import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  userSearchResults: { results : generalTypes.SearchProfileInfo[]; };
}

export interface IDispatchProps {
  loadRecommendations(): void;
  lockPage(): void;
  searchUser(name: string): void;
}

export type IProps = IStateProps & IDispatchProps;
