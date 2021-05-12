import * as GeneralTypes from 'utils/typing/general';

export interface IStateProps {
  userSearchResults: GeneralTypes.SearchProfileInfo[];
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
  searchUser(name: string): void;
}

export type IProps = IStateProps & IDispatchProps;
