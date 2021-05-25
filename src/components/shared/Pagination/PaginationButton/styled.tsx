import styled from 'styled-components';

import { cssVars } from 'utils/style.common';

export const Wrapper = styled.button<{ isCurrent?: boolean; }>`
  background-color: ${props => (props.isCurrent ? cssVars.colorForegroundPickMain : 'white')};
  color: ${props => (props.isCurrent ? 'white' : cssVars.colorForegroundPickMain)};
  border: ${cssVars.thiknessDefault} ${cssVars.colorForegroundPickMain} solid;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  font-size: 1.3rem;
  user-select: none;
  outline: none;

  &:hover {
    opacity: ${cssVars.opacityButtonHover};
    filter: alpha(opacity=${cssVars.opacityButtonHover} * 100);
  }

  &:active {
    opacity: ${cssVars.opacityButtonActive};
    filter: alpha(opacity=${cssVars.opacityButtonActive} * 100);
  }

  &:disabled {
    color: transparent;
    border-color: transparent;
    background-color: transparent;
  }
`;
