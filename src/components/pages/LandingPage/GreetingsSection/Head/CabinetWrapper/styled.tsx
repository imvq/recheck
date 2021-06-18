import styled from 'styled-components';

import { cssVars } from 'utils/style.common';
import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

const cssVarsLocal = {
  widthOffset: '12rem'
};

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
