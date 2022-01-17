import { IOptionType } from 'commons/types';

export interface IOwnProps {
  width?: string;
  placeholder?: string;
  options: IOptionType[];
  onNewOptionSelected: (selectedOne: IOptionType) => void;
}

export interface IStateProps {}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
