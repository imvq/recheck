import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  options: generalTypes.OptionType[];
  onOptionSelected(selectedOne: generalTypes.OptionType): void;
  onClose(): void;
}

export type IProps = IOwnProps;
