import { IExtendedOptionType } from 'commons/types';

export interface IOwnProps {
  options: IExtendedOptionType[];
  onOptionSelected(selectedOne: IExtendedOptionType): void;
  onClose(): void;
  width?: string;
}

export type IProps = IOwnProps;
