import styled from 'styled-components';

import { cssVars } from 'utils/style.common';

export const Wrapper = styled.button<{ isCurrent?: boolean; }>`
  background-color: ${props => (props.isCurrent ? 'white' : cssVars.colorForegroundPickAux1)};
  color: ${props => (props.isCurrent ? cssVars.colorForegroundPickAux1 : 'white')};
  border: ${cssVars.thiknessDefault} ${cssVars.colorForegroundPickAux1} solid;
  border-radius: 100%;
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
  }

  &:active:not(:disabled) {
    opacity: ${cssVars.opacityButtonActive};
    filter: alpha(opacity=${cssVars.opacityButtonActive} * 100);
  }

  &:disabled {
    color: white;
    border-color: #b6b6b6;
    background-color: #b6b6b6;
    cursor: default;
  }
`;
