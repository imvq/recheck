import styled from 'styled-components';

import { cssVars } from 'style.common';
import { respond, ScreenBreakpoint } from 'tools.common';

const cssVarsLocal = {
  widthOffset: '12rem'
};

/**
 * Wrapper for cabinet button.
 */
export const Wrapper = styled.div`
  grid-area: TelegramWrapper;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: calc(
      ${cssVars.greetingsViewHeadPaddingHorizontal}
    + ${cssVarsLocal.widthOffset}
  );

  ${respond(ScreenBreakpoint.XS)} {
    margin: 0;
  }
`;
