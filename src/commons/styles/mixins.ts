import styled, { css } from 'styled-components';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/functions';
import cssVarsCommon from './cssVars';

/**
 * Encapsulation for reusable style mixins.
 */
const mixins = {
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
  HTWLeftOrientedCentralizedBox: css`
    &:first-child {
      position: relative;
      grid-area: Aux;
      display: flex;
      justify-content: flex-end;

      ${respond(screenBreakpoints.XS)} {
        display: none;
      }
    }

    &:last-child {
      position: relative;
      grid-area: Main;
      display: flex;

      ${respond(screenBreakpoints.XS)} {
        justify-content: center;
        width: 100%;
      }
    }
  `,
  HTWLeftOrientedSectionWrapper: css`
    display: grid;
    grid-template: 'Aux Main' 1fr / 1fr 1fr;

    ${respond(screenBreakpoints.XS)} {
      display: flex;
      align-items: center;
    }
  `,
  HTWparagraphBackground: css`
    position: absolute;
    z-index: 0;

    ${respond(screenBreakpoints.XS)} {
      display: none;
    }
  `,
  HTWParagraphWrapper: css`
    position: absolute;
    display: flex;
    flex-direction: column;

    ${respond(screenBreakpoints.XS)} {
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

    ${respond(screenBreakpoints.XS)} {
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

    ${respond(screenBreakpoints.XS)} {
      text-align: center;
      max-width: initial;
    }
  `
};

/**
 * Mixins with prepared components representing a mixin-only-containing styled components.
 * Separation of prepared components is needed to avoid creating new components
 * implementing the same mixins.
 */
const extendedMixins = {
  ...mixins,
  prepared: {
    DefaultImage: styled.img``,
    DefaultInput: styled.input`${mixins.DefaultInput};`,
    DefaultSpan: styled.span``,
    DefaultWrapper: styled.div``,
    HTWLeftOrientedCentralizedBox: styled.div`${mixins.HTWLeftOrientedCentralizedBox}`,
    LandingBlockText: styled.p`${mixins.LandingBlockText};`,
    LandingTitle: styled.h1`${mixins.LandingTitle};`
  }
};

export default extendedMixins;
