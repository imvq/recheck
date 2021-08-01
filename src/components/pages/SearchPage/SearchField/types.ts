import { IInputEvent } from 'utils/typing/general';

export interface IOwnProps {
  lockPageCallback(): void;
  quickSearchCallback(event: IInputEvent): void;
  searchUserCallback(tokens: string[]): void;
}

export type IProps = IOwnProps;
