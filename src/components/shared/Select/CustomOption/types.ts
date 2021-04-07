import { OptionType } from 'utils/types.common';

export interface IOwnProps {
  optionData: OptionType;
  onClick: (selectedValue: OptionType) => void;
}

export type IProps = IOwnProps;
