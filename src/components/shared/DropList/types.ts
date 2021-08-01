import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  options: generalTypes.IExtendedOptionType[];
  onOptionSelected(selectedOne: generalTypes.IExtendedOptionType): void;
  onClose(): void;
  width?: string;
}

export type IProps = IOwnProps;
