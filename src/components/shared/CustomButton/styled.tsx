import styled from 'styled-components';

import { cssVars } from 'utils/style.common';
import { IStyledProps } from './types';

const cssVarsLocal = {
  defaultBackgroundColor: '#33c7ba',
  defaultHeight: '3rem'
};

type WrapperProps = Pick<IStyledProps, 'isDisabled'>;

export const Wrapper = styled.button<WrapperProps>`
  cursor: ${props => (props.isDisabled ? 'default' : 'pointer')};
  display: flex;
  justify-content: center;
  min-width: 12.5rem;
  width: fit-content;
  height: fit-content;
  border: none;
  outline: none;
  background: none;
`;

export const ButtonContentArea = styled.div<IStyledProps>`
  position: relative;
  height: ${props => props.height || cssVarsLocal.defaultHeight};
  min-width: 4.273rem;
  padding: 0 calc(${cssVars.thiknessDefault} * 3) 0;
  font-size: ${props => props.fontSize || '1.1rem'};
  color: ${props => (props.isHollow ? props.backgroundColor || cssVarsLocal.defaultBackgroundColor : props.color || 'white')};
  background-color: ${props => (
    props.isHollow ? 'none'
      : props.backgroundColor || cssVarsLocal.defaultBackgroundColor
  )};
  display: flex;
  justify-content: center;
  border: calc(${cssVars.thiknessDefault} * 3) solid ${props => props.backgroundColor || cssVarsLocal.defaultBackgroundColor};
  ${props => (props.isHollow ? 'border-left-color: rgba(0,0,0,0);' : '')}
  ${props => (props.isHollow ? 'border-right-color: rgba(0,0,0,0);' : '')}
  align-items: center;
  user-select: none;

  ${props => (props.isHovered ? 'filter: brightness(90%)' : '')};
  ${props => (props.isActive ? 'filter: brightness(75%)' : '')};
  ${props => (props.isDisabled ? 'filter: grayscale(100%)' : '')};
`;

type RoundedAreaProps = Omit<
  IStyledProps,
  'color' | 'fontSize' | 'isHovered' | 'isActive' | 'isDisabled'
>;

const RoundedArea = styled.div<RoundedAreaProps>`
  position: absolute;
  width: ${props => props.height || cssVarsLocal.defaultHeight};
  height: ${props => props.height || cssVarsLocal.defaultHeight};
  background-color: ${props => (
    props.isHollow ? 'none'
      : props.backgroundColor || cssVarsLocal.defaultBackgroundColor
  )};
  border: calc(${cssVars.thiknessDefault} * 3) solid ${props => props.backgroundColor || cssVarsLocal.defaultBackgroundColor};
  border-radius: 50%;
`;

export const RoundedAreaLeft = styled(RoundedArea)`
  right: calc(100% - ${cssVars.thiknessDefault} * 3);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  ${props => (props.isHollow ? 'border-right-color: rgba(0,0,0,0);' : '')}
`;

export const RoundedAreaRight = styled(RoundedArea)`
  left: calc(100% - ${cssVars.thiknessDefault} * 3);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  ${props => (props.isHollow ? 'border-left-color: rgba(0,0,0,0);' : '')}
`;
