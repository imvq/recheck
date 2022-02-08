import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';

export const Entry = styled.button<{ isPressed?: boolean; }>`
  width: 100%;
  box-sizing: border-box;
  padding: 1.2rem 0 1.2rem 1rem;
  border: none;

  display: flex;

  font-size: 1.3rem;
  font-weight: 500;

  background-color: ${props => (props.isPressed ? 'rgb(240, 243, 255)' : 'inherit')};

  cursor: pointer;

  &:active {
    color: ${cssVars.colorForegroundPickAux1};
  }
`;
