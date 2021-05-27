import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  width?: string;
  placeholder?: string;
  options: generalTypes.OptionType[];
  onNewOptionSelected: (selectedOne: generalTypes.OptionType) => void;
}

export type IProps = IOwnProps;
