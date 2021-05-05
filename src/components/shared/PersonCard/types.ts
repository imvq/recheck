import * as UtilityTypes from 'utils/typing/utility';

export interface IOwnProps {
  name: string;
  position: string;
  company: string;
  photoUrl: UtilityTypes.Nullable<string>;
}

export type IProps = IOwnProps;
