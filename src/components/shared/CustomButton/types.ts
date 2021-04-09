import { PropsWithChildren } from 'react';

export interface IStyledOwnProps {
  height?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  isHollow?: boolean;
  isHovered: boolean;
  isActive: boolean;
  isDisabled: boolean;
}

export type IStyledProps = IStyledOwnProps;

export type IOwnProps = Omit<IStyledOwnProps & {
  onClick?: () => void;
}, 'isHovered' | 'isActive'>;

export type IProps = PropsWithChildren<IOwnProps>;
