import { Nullable } from 'utils/types.common';

export interface IOwnProps {
  name: string;
  position: string;
  company: string;
  photoUrl: Nullable<string>;
}

export type IProps = IOwnProps;
