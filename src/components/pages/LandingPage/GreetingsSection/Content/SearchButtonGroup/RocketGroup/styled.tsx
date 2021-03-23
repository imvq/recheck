import styled from 'styled-components';

import { cssVars } from 'style.common';
import { respond, ScreenBreakpoint } from 'tools.common';
import { ReactComponent as RocketLineSvg } from 'assets/svg/LandingPage/GreetingsView/Content/SearchButtonGroup/RocketGroup/RocketLine.svg';
import { ReactComponent as RocketSvg } from 'assets/svg/LandingPage/GreetingsView/Content/SearchButtonGroup/RocketGroup/Rocket.svg';

/**
 * Styled component for rocket line SVG.
 */
export const Line = styled(RocketLineSvg)`
  position: absolute;
  height: 45rem;
  right: calc(${cssVars.greetingsViewContentActionGroupWidth} / 2 - 1rem);
  top: 2.5rem;

  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;

/**
 * Styled component for Rocket SVG.
 */
export const Rocket = styled(RocketSvg)`
  position: absolute;
  top: 16.5rem;
  right: 27.5rem;
  width: 9.5rem;
  height: 9.2rem;

  ${respond(ScreenBreakpoint.XS)} {
    position: static;
    width: 15rem;
    height: 15rem;
  }
`;
