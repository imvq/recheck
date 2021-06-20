import styled from 'styled-components';

import { cssVars, mixins } from 'utils/style.common';

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

  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.img`
  width: 3rem;
  height: 100%;
  object-fit: contain;
  padding: .2rem;
`;

export const SelectTitle = styled.span``;
