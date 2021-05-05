import * as GeneralTypes from 'utils/typing/general';

export interface IOwnProps {
  width?: string;
  placeholder?: string;
  options: GeneralTypes.OptionType[];
  onNewOptionSelected: (selectedOne: GeneralTypes.OptionType) => void;
}

export type IProps = IOwnProps;
