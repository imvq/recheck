import styled, { css } from 'styled-components';

import { cssVars } from 'utils/style.common';

export const Wrapper = styled.button<{ isCurrent?: boolean; }>`
  background: none;
  border: none;
  color: ${props => (props.isCurrent ? cssVars.colorForegroundPickAux1 : 'black')};
  width: 2rem;
  height: 2rem;
  padding: 1.2rem;
  font-size: 1.3rem;
  font-weight: 500;
  user-select: none;
  outline: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover:not(:disabled) {
    opacity: ${cssVars.opacityButtonHover};
    filter: alpha(opacity=${cssVars.opacityButtonHover} * 100);
    text-decoration: underline;
  }

  &:active:not(:disabled) {
    opacity: ${cssVars.opacityButtonActive};
    filter: alpha(opacity=${cssVars.opacityButtonActive} * 100);
    text-decoration: underline;
  }

  &:disabled {
    color: white;
    border-color: #b6b6b6;
    background-color: #b6b6b6;
    cursor: default;
  }
`;

export const Arrow = ({ isEnabled }: { isEnabled?: boolean }) => css`
  width: 1rem;
  height: 2.2rem;
  cursor: ${isEnabled ? 'pointer' : 'default'};

  display: flex;
  align-items: center;
  
  svg>path {
    fill: ${(isEnabled ? '#33c7ba' : '#c4c4c4')};
  }
`;

export const ArrowRightWrapper = styled.div<{ isEnabled?: boolean; }>`
  ${props => Arrow({ isEnabled: props.isEnabled })}
`;

export const ArrowLeftWrapper = styled.div<{ isEnabled?: boolean; }>`
  ${props => Arrow({ isEnabled: props.isEnabled })}
`;
