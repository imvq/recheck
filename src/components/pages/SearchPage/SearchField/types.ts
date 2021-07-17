export interface IOwnProps {
  lockPageCallback(): void;
  searchUserCallback(tokens: string[]): void;
}

export type IProps = IOwnProps;
