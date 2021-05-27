import * as generalTypes from 'utils/typing/general';

export interface IStateProps {
  userSearchResults: generalTypes.SearchProfileInfo[];
}

export interface IDispatchProps {
  lockPage(): void;
  searchUser(name: string): void;
}

export type IProps = IStateProps & IDispatchProps;
