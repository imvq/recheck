import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';

export const Wrapper = styled.button<{ isPressed?: boolean; }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${props => (props.isPressed ? cssVars.colorForegroundPickAux1 : 'inherit')};

  &:active {
    color: ${cssVars.colorForegroundPickAux1};
  }
`;
