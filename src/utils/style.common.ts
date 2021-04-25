import { css, keyframes } from 'styled-components';

import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

/**
 * Encapsulation for reusable styles variables.
 */
export const cssVars = {
  colorBackgroundBadge: '#dde0ee',
  colorBackgroundRect: '#e9edfb',
  colorForegroundPickMain: '#4f69ca',
  colorForegroundPickAux1: '#33c7ba',
  footerHeight: '17.5rem',
  greetingsViewContentActionGroupWidth: '38rem',
  greetingsViewHeadEdgeElemsWidthBase: '15rem',
  greetingsViewHeadPaddingHorizontal: '16rem',
  inputBorderRadiusDefault: '.6rem',
  inputHeightDefault: '3.072rem',
  logoRectHeightBase: '2.625rem',
  opacityButtonHover: '.8',
  opacityButtonActive: '.5',
  opacityButtonIdleInversed: '.8',
  sectionShadow: 'drop-shadow(1rem 1rem .6rem rgba(0, 0, 0, .1))',
  thiknessDefault: '0.078vw',
  widthMotivatorBadge: '25rem',
  widthReviewCard: '67.38em',
  zIndexDimmedContent: '801',
  zIndexDimmingWrapper: '800',
  zIndexLoginBadge: '50',
  zIndexPopupCookie: '100',
  zIndexPopupLogin: '100',
  zIndexSelectMenu: '150',
  zIndexScrollButton: '200',
  zIndexPopupSearch: '300',
  zIndexPageLoader: '900'
};

/**
 * Encapsulation for reusable CSS animations.
 */
export const animations = {
  fadeDefault: keyframes`
    0% {
      transform: scale(.9);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  `,
  slideIn: keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  `
};

/**
 * Encapsulation for reusable style mixins.
 */
export const mixins = {
  DefaultButton: css`
    cursor: pointer;
    transition: .1s;
    filter: drop-shadow(.2rem .3125rem .5rem rgba(0, 0, 0, .25));

    &:hover {
      opacity: ${cssVars.opacityButtonHover};
      filter: alpha(opacity=${cssVars.opacityButtonHover} * 100);
    }

    &:active {
      opacity: ${cssVars.opacityButtonActive};
      filter: alpha(opacity=${cssVars.opacityButtonActive} * 100);
    }
  `,
  DefaultInput: css`
    width: 100%;
    height: ${cssVars.inputHeightDefault};
    font-size: 1.3rem;
    line-height: normal;
    border: calc(${cssVars.thiknessDefault} * 2) solid #c7c7c7;
    border-radius: ${cssVars.inputBorderRadiusDefault};
    background-color: white;
    box-sizing: border-box;
    padding: .6rem;
    outline: none;

    &:placeholder {
      color: #979797;
    }

    &:focus {
      border-color: #979797;
    }
  `,
  HTWBadge: css`
    background-color: ${cssVars.colorBackgroundBadge};
    box-sizing: border-box;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    font-weight: 600;
  `,
  HTWLeftOrientedCentralizingBox: css`
    &:first-child {
      position: relative;
      grid-area: Aux;
      display: flex;
      justify-content: flex-end;

      ${respond(ScreenBreakpoint.XS)} {
        display: none;
      }
    }

    &:last-child {
      position: relative;
      grid-area: Main;
      display: flex;

      ${respond(ScreenBreakpoint.XS)} {
        justify-content: center;
        width: 100%;
      }
    }
  `,
  HTWLeftOrientedSectionWrapper: css`
    display: grid;
    grid-template: 'Aux Main' 1fr / 1fr 1fr;

    ${respond(ScreenBreakpoint.XS)} {
      display: flex;
      align-items: center;
    }
  `,
  HTWparagraphBackground: css`
    position: absolute;
    z-index: 0;

    ${respond(ScreenBreakpoint.XS)} {
      display: none;
    }
  `,
  HTWParagraphWrapper: css`
    position: absolute;
    display: flex;
    flex-direction: column;

    ${respond(ScreenBreakpoint.XS)} {
      position: static;
      align-items: center;
    }
  `,
  InfoblockSubsectionTitle: css`
    font-weight: 600;
    font-size: 1.492rem;
    line-height: 2.014rem;
    max-width: 37.3rem;
    user-select: none;
  `,
  LandingTitle: css`
    font-weight: 600;
    font-size: 1.790rem;
    line-height: 2.387rem;
    max-width: 37.3rem;
    user-select: none;

    ${respond(ScreenBreakpoint.XS)} {
      text-align: center;
      max-width: initial;
    }
  `,
  LandingBlockText: css`
    font-size: 1.342rem;
    max-width: 35.808rem;
    line-height: 1.909rem;
    z-index: 1;
    user-select: none;

    ${respond(ScreenBreakpoint.XS)} {
      text-align: center;
      max-width: initial;
    }
  `
};
