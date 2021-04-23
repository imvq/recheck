import { OptionType } from 'utils/types.common';

export interface IOwnProps {
  width?: string;
  placeholder?: string;
  options: OptionType[];
  onNewOptionSelected: (selectedOne: OptionType) => void;
}

export type IProps = IOwnProps;
