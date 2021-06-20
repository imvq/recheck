import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  optionData: generalTypes.ExtendedOptionType;
  onClick: (selectedValue: generalTypes.OptionType) => void;
}

export type IProps = IOwnProps;
