import styled from 'styled-components';

import { respond, ScreenBreakpoint } from 'tools.common';

/**
 * Styled component for tabs section main wrapper.
 */
export const Wrapper = styled.div`
  grid-area: TabSection;
  display: flex;
  justify-content: space-between;
  padding-top: .2rem;
  align-items: center;

  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;

/**
 * Styled component for tab button.
 */
export const TabButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  font-family: Open Sans;
  font-size: 1.3rem;
`;
