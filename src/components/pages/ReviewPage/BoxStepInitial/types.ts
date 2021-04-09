import { IProps as IPropsBase } from '../BoxBase/types';

export interface IStateProps {
  firstName: string;
  lastName: string;
  company: string;
  bounds: string;
}

export interface IDispatchProps {
  setFirstName(value: string): void;
  setLastName(value: string): void;
  setCompany(value: string): void;
  setBounds(value: string): void;
}

export type IProps = IPropsBase & IStateProps & IDispatchProps;
