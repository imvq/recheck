import styled from 'styled-components';

import { cssVars, mixins } from 'style.common';
import { respond, ScreenBreakpoint } from 'tools.common';
import { ReactComponent as CabinetSvg } from 'assets/images/pages/LandingPage/GreetingsSection/Head/CabinetIcon.svg';

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

/**
 * Cabinet button itself.
 */
export const Button = styled(CabinetSvg)`
  ${mixins.DefaultButton}

  width: calc(
      ${cssVars.greetingsViewHeadEdgeElemsWidthBase}
    - ${cssVarsLocal.widthOffset}
  );
  opacity: ${cssVars.opacityButtonIdleInversed};
  filter: alpha(opacity=${cssVars.opacityButtonIdleInversed} * 100);
`;
