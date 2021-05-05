import * as GeneralTypes from 'utils/typing/general';

export interface IOwnProps {
  optionData: GeneralTypes.OptionType;
  onClick: (selectedValue: GeneralTypes.OptionType) => void;
}

export type IProps = IOwnProps;
