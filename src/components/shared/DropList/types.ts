import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  options: generalTypes.ExtendedOptionType[];
  onOptionSelected(selectedOne: generalTypes.ExtendedOptionType): void;
  onClose(): void;
}

export type IProps = IOwnProps;
