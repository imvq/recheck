import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  optionData: generalTypes.OptionType;
  onClick: (selectedValue: generalTypes.OptionType) => void;
}

export type IProps = IOwnProps;
