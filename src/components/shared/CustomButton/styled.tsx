import styled from 'styled-components';

import { cssVars } from 'utils/style.common';
import { IStyledProps } from './types';

const cssVarsLocal = {
  defaultBackgroundColor: '#33c7ba',
  defaultHeight: '3rem'
};

export const Wrapper = styled.button<IStyledProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-width: 12.5rem;
  width: ${props => props.width || 'fit-content'};
  height: fit-content;
  border: none;
  outline: none;
  background: none;

  &:disabled {
    cursor: default;
  }
`;

export const ButtonContentArea = styled.div<IStyledProps>`
  position: relative;
  height: ${props => props.height || cssVarsLocal.defaultHeight};
  padding: 0 calc(${cssVars.thiknessDefault} * 3) 0;
  font-size: ${props => props.fontSize || '1.1rem'};
  color: ${props => (props.color || (props.isHollow ? props.backgroundColor || cssVarsLocal.defaultBackgroundColor : 'white'))};
  background-color: ${props => (
    props.isHollow ? 'unset'
      : props.backgroundColor || cssVarsLocal.defaultBackgroundColor
  )};
  display: flex;
  justify-content: center;
  border: calc(${cssVars.thiknessDefault} * 3) solid ${props => props.backgroundColor || cssVarsLocal.defaultBackgroundColor};
  ${props => (props.isHollow ? 'border-left-color: rgba(0,0,0,0);' : '')}
  ${props => (props.isHollow ? 'border-right-color: rgba(0,0,0,0);' : '')}
  align-items: center;
  user-select: none;

  filter: ${props => (props.isDisabled ? 'grayscale(100%)' : 'none')};
  pointer-events: ${props => (props.isDisabled ? 'none' : 'all')};

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(75%);
  }
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
    props.isHollow ? 'unset'
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
