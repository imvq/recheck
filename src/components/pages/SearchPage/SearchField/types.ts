export interface IOwnProps {
  lockPageCallback(): void;
  searchUserCallback(name: string): void;
}

export type IProps = IOwnProps;
