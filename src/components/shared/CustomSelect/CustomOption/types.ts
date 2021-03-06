import { IOptionType } from 'commons/types';

export interface IOwnProps {
  optionData: IOptionType;
  onClick: (selectedValue: IOptionType) => void;
}

export interface IStateProps {}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
