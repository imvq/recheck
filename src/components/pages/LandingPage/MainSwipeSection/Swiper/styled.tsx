import styled, { css } from 'styled-components';

import { animations, cssVars } from 'style.common';
import { ReactComponent as ArrowLeftSvg } from 'assets/images/pages/LandingPage/MainSwipeSection/ArrowLeft.svg';
import { ReactComponent as ArrowRightSvg } from 'assets/images/pages/LandingPage/MainSwipeSection/ArrowRight.svg';

const cssVarsLocal = {
  brightnessForUnfocused: '60%',
  marginTopForUnfocused: '4em',
  shiftInverting: '15em',
  sizeFontNormal: '1em',
  scaleReducerUnfocused: '.8',
  zIndexForUnfocused: '2'
};

const mixinsLocal = {
  Arrow: css`
    width: 1.625rem;
    transition-duration: 300ms;

    &:hover {
      transform: scale(1.25);
    }
  `
};

/**
 * Styled component for swiper.
 */
export const Wrapper = styled.div`
  grid-area: CardsView;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  user-select: none;

  animation: ${animations.fadeDefault} 1.4s;
`;

/**
 * Styled component for justification wrapper.
 */
export const JustificationWrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  width: calc(2 * ${cssVars.widthReviewCard} * ${cssVarsLocal.scaleReducerUnfocused});
`;

export const CardWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  z-index: ${cssVarsLocal.zIndexForUnfocused};
  font-size: ${cssVarsLocal.sizeFontNormal};

  &:first-child,
  &:last-child {
    z-index: calc(${cssVarsLocal.zIndexForUnfocused} - 1);
    left: ${cssVarsLocal.shiftInverting};
    font-size: calc(${cssVarsLocal.sizeFontNormal}
      * ${cssVarsLocal.scaleReducerUnfocused});
    filter: brightness(${cssVarsLocal.brightnessForUnfocused});
  }

  &:last-child {
    z-index: calc(${cssVarsLocal.zIndexForUnfocused} - 2);
    right: ${cssVarsLocal.shiftInverting};
    left: unset;
  }
`;

/**
 * Styled component for left arrow.
 */
export const ArrowLeft = styled(ArrowLeftSvg)`
  ${mixinsLocal.Arrow}

  margin-right: calc(-${cssVarsLocal.shiftInverting} / 2);
`;

/**
 * Styled component for right arrow.
 */
export const ArrowRight = styled(ArrowRightSvg)`
  ${mixinsLocal.Arrow}

  margin-left: calc(-${cssVarsLocal.shiftInverting} / 2);
`;
