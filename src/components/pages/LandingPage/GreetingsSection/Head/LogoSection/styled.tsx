import styled from 'styled-components';

import { cssVars } from 'style.common';
import { respond, ScreenBreakpoint } from 'tools.common';

/**
 * Styled component for logo image wrapper.
 */
export const Wrapper = styled.div`
  grid-area: LogoWrapper;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: ${cssVars.greetingsViewHeadPaddingHorizontal};

  ${respond(ScreenBreakpoint.XS)} {
    margin: 0;
  }
`;
