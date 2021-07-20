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

export type IOwnProps = IStyledOwnProps & { onClick?: () => void };

export type IProps = PropsWithChildren<IOwnProps>;
