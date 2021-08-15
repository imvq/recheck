import * as generalTypes from 'commons/types/general';

export interface IOwnProps {
  optionData: generalTypes.IOptionType;
  onClick: (selectedValue: generalTypes.IOptionType) => void;
}

export type IProps = IOwnProps;
