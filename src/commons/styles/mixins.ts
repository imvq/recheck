import { css } from 'styled-components';

import { ScreenBreakpoint } from 'commons/utils/enums';
import { respond } from 'commons/utils/functions';
import cssVarsCommon from './cssVars';

/**
 * Encapsulation for reusable style mixins.
 */
export default {
  DefaultButton: css`
    cursor: pointer;
    transition: .1s;
    filter: drop-shadow(.2rem .3125rem .5rem rgba(0, 0, 0, .25));

    &:hover {
      opacity: ${cssVarsCommon.opacityButtonHover};
      filter: alpha(opacity=${cssVarsCommon.opacityButtonHover} * 100);
    }

    &:active {
      opacity: ${cssVarsCommon.opacityButtonActive};
      filter: alpha(opacity=${cssVarsCommon.opacityButtonActive} * 100);
    }
  `,
  DefaultInput: css`
    width: 100%;
    height: ${cssVarsCommon.inputHeightDefault};
    font-size: 1.3rem;
    line-height: normal;
    border: calc(${cssVarsCommon.thiknessDefault} * 2) solid #c7c7c7;
    border-radius: ${cssVarsCommon.inputBorderRadiusDefault};
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
    background-color: ${cssVarsCommon.colorBackgroundBadge};
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
