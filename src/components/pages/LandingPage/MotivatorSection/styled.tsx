import styled, { css } from 'styled-components';

import MotivatorBackground from 'assets/images/pages/LandingPage/MotivatorSection/Background.png';
import cssVars from 'commons/styles/cssVars';
import mixins from 'commons/styles/mixins';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/functions';

const mixinsLocal = {
  MotivatorBadgeAdapted: css`
    ${respond(screenBreakpoints.XS)} {
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
  
  ${respond(screenBreakpoints.XS)} {
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

  ${respond(screenBreakpoints.XS)} {
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

  ${respond(screenBreakpoints.XS)} {
    margin-bottom: 1rem;
  }
`;

export const Image = styled.img`
  width: 42rem;
  padding-left: 10rem;

  ${respond(screenBreakpoints.XS)} {
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

  ${respond(screenBreakpoints.XS)} {
    padding-left: 0;
    padding-right: 6.5rem;
  }
`;

export const TitleWrapper = styled.div`
  grid-area: TitleView;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
`;

export const TextWrapper = styled.div`
  margin-top: 1rem;

  ${respond(screenBreakpoints.XS)} {
    margin-top: 5rem;
  }
`;

export const TitleText = styled.span`
  font-weight: 600;
  font-size: 2.536rem;
`;
