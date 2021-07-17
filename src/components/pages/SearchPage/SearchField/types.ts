import { InputEvent } from 'utils/typing/general';

export interface IOwnProps {
  lockPageCallback(): void;
  quickSearchCallback(event: InputEvent): void;
  searchUserCallback(tokens: string[]): void;
}

export type IProps = IOwnProps;
