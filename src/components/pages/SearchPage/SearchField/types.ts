import { IInputEvent } from 'commons/types';

export interface IOwnProps {
  lockPageCallback(): void;
  quickSearchCallback(event: IInputEvent): void;
  searchUserCallback(tokens: string[]): void;
}

export interface IStateProps {
  searchText: string;
}

export interface IDispatchProps {
  setSearchText(text: string): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
