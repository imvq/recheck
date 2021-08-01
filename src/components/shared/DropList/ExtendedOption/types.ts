import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  optionData: generalTypes.IExtendedOptionType;
  onClick: (selectedValue: generalTypes.IOptionType) => void;
}

export type IProps = IOwnProps;
