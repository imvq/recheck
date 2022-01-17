import { IExtendedOptionType, IOptionType } from 'commons/types';

export interface IOwnProps {
  optionData: IExtendedOptionType;
  onClick: (selectedValue: IOptionType) => void;
}

export interface IStateProps {}

export interface IDispacthProps {}

export type IProps = IOwnProps & IStateProps & IDispacthProps;
