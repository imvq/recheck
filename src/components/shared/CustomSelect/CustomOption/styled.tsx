import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';
import mixins from 'commons/styles/mixins';

export const Wrapper = styled.div`
  ${mixins.DefaultInput};

  height: fit-content;
  border: none;
  border-bottom: calc(${cssVars.thiknessDefault} * 2) solid #c7c7c7;
  border-radius: 0;

  &:hover {
    background-color: rgba(80, 194, 182, 0.25);
  }

  &:active {
    background-color: rgba(71, 168, 159, 0.25);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const SelectTitle = styled.span``;
