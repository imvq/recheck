export interface IOwnProps {
  children: string;
  onClick(): void;
  isPressed: boolean;
}

export type IProps = IOwnProps;
