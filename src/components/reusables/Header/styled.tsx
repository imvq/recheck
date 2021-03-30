import styled from 'styled-components';

import { cssVars } from 'style.common';
import { respond, ScreenBreakpoint } from 'tools.common';

/**
 * Styled component for Header.
 */
export const Wrapper = styled.div`
  height: 8rem;
  display: grid;
  grid-template: 'LogoWrapper LoginBadge';
  
  ${respond(ScreenBreakpoint.XS)} {
    display: flex;
    justify-content: space-evenly;
    background-color: #fbfbff;
  }
`;

/**
 * Styled component for logo image wrapper.
 */
export const LogoWrapper = styled.div`
  grid-area: LogoWrapper;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: ${cssVars.greetingsViewHeadPaddingHorizontal};

  ${respond(ScreenBreakpoint.XS)} {
    margin: 0;
  }
`;

const cssVarsLocal = {
  widthOffset: '12rem'
};

/**
 * Wrapper for login badge.
 */
export const LoginBadgeWrapper = styled.div`
  grid-area: LoginBadge;
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
