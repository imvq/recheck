import styled from 'styled-components';

import { respond, ScreenBreakpoint } from 'tools.common';

/**
 * Styled component for warranty subsection outer wrapper.
 */
export const Wrapper = styled.div`
  grid-area: InfoWarranty;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${respond(ScreenBreakpoint.XS)} {
    justify-content: center;
  }
`;
