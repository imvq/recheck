import { IProps as IPropsBase } from '../../../shared/BoxBase/types';

export interface IOwnProps {
  targetName?: string;
}

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

export type IProps = IPropsBase & IOwnProps & IStateProps & IDispatchProps;
