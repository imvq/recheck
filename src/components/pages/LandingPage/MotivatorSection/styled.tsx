import styled, { css } from 'styled-components';

import cssVars from 'commons/styles/cssVars';
import mixins from 'commons/styles/mixins';
import { ScreenBreakpoint } from 'commons/utils/enums';
import { respond } from 'commons/utils/functions';
import MotivatorBackground from 'assets/images/pages/LandingPage/MotivatorSection/Background.png';

const mixinsLocal = {
  MotivatorBadgeAdapted: css`
    ${respond(ScreenBreakpoint.XS)} {
      position: static;
      margin-left: calc(-${cssVars.widthMotivatorBadge} / 2);
    }
  `
};

export const Wrapper = styled.div`
  grid-area: MotivatorView;
  height: 70rem;
  background-image: url(${MotivatorBackground});
  background-size: cover;
  background-repeat: no-repeat;

  display: grid;
  grid-template:
    'TitleView' 14.5rem
    'FocusView' 1fr;
  
  ${respond(ScreenBreakpoint.XS)} {
    height: 80rem;
  }
`;

export const FocusView = styled.div`
  position: relative;
  grid-area: FocusView;
  display: flex;
  justify-content: center;
`;

export const Anchor = styled.div`
  position: relative;
  width: 0;
`;

export const AnchorSticky = styled(Anchor)`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${respond(ScreenBreakpoint.XS)} {
    width: unset;
    max-width: 100%;
  }
`;

export const MotivatorBadgeWrapper = styled.div`
  position: absolute;

  &:nth-child(1) {
    ${mixinsLocal.MotivatorBadgeAdapted}

    top: 15rem;
    right: 10rem;
  }

  &:nth-child(2) {
    ${mixinsLocal.MotivatorBadgeAdapted}

    top: 0;
    right: -13rem;
  }

  &:nth-child(3) {
    ${mixinsLocal.MotivatorBadgeAdapted}

    top: 13rem;
    left: 13rem;
  }

  ${respond(ScreenBreakpoint.XS)} {
    margin-bottom: 1rem;
  }
`;

export const Image = styled.img`
  width: 42rem;
  padding-left: 10rem;

  ${respond(ScreenBreakpoint.XS)} {
    padding-left: 0;
    max-width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  ${mixins.DefaultButton}

  position: absolute;
  bottom: 16rem;
  width: 15rem;
  padding-left: 3.5rem;

  ${respond(ScreenBreakpoint.XS)} {
    padding-left: 0;
    padding-right: 6.5rem;
  }
`;
