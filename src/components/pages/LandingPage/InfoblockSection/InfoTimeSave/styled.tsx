import styled from 'styled-components';

import { respond, ScreenBreakpoint } from 'tools.common';

/**
 * Styled component for time save subsection outer wrapper.
 */
export const Wrapper = styled.div`
  grid-area: InfoTimeSave;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${respond(ScreenBreakpoint.XS)} {
    justify-content: center;
  }
`;
