import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';
import mixins from 'commons/styles/mixins';

import { ReactComponent as RocketLineSvg } from 'assets/images/pages/LandingPage/GreetingsSection/Content/SearchButtonGroup/RocketGroup/RocketLine.svg';
import { ReactComponent as RocketSvg } from 'assets/images/pages//LandingPage/GreetingsSection/Content/SearchButtonGroup/RocketGroup/Rocket.svg';
import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/misc';

export const ProfileButtonGroup = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-top: 2rem;

  display: flex;
  justify-content: center;

  &>*:first-child {
    z-index: 1;
  }
`;

export const ImagesWrapper = mixins.prepared.DefaultSpan;

export const Line = styled(RocketLineSvg)`
  position: absolute;
  height: 45rem;
  right: calc(${cssVars.greetingsViewContentActionGroupWidth} / 2 - 1rem);
  top: 2.5rem;

  ${respond(screenBreakpoints.XS)} {
    display: none;
  }
`;

export const Rocket = styled(RocketSvg)`
  position: absolute;
  top: 16.5rem;
  right: 27.5rem;
  width: 9.5rem;
  height: 9.2rem;

  ${respond(screenBreakpoints.XS)} {
    position: static;
    width: 15rem;
    height: 15rem;
  }
`;
