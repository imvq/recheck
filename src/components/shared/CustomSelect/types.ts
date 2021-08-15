import * as generalTypes from 'commons/types/general';

export interface IOwnProps {
  width?: string;
  placeholder?: string;
  options: generalTypes.IOptionType[];
  onNewOptionSelected: (selectedOne: generalTypes.IOptionType) => void;
}

export type IProps = IOwnProps;
