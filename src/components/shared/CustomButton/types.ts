import { PropsWithChildren } from 'react';

export interface IStyledOwnProps {
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  isHollow?: boolean;
  isDisabled?: boolean;
}

export type IStyledProps = IStyledOwnProps;

export type IOwnProps = PropsWithChildren<IStyledOwnProps & { onClick?: () => void }>;

export interface IStateProps {}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
