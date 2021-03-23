import styled from 'styled-components';

import { cssVars, mixins } from 'style.common';
import { respond, ScreenBreakpoint } from 'tools.common';

/**
 * Styled component for second step section wrapper.
 */
export const Wrapper = styled.div`
  grid-area: StepSecondView;
  display: grid;
  grid-template: 'Main Aux' 1fr / 1fr 1fr;

  ${respond(ScreenBreakpoint.XS)} {
    display: flex;
    align-items: center;
    background-color: ${cssVars.colorBackgroundRect};
  }
`;

/**
 * Styled component for wrapper making section content be centrazlized.
 */
export const CentralizingBox = styled.div`
  &:first-child {
    position: relative;
    grid-area: Main;
    display: flex;
    justify-content: flex-end;

    ${respond(ScreenBreakpoint.XS)} {
      width: 100%;
    }
  }

  &:last-child {
    position: relative;
    grid-area: Aux;
    display: flex;
    justify-content: flex-start;

    ${respond(ScreenBreakpoint.XS)} {
      display: none;
    }
  }
`;

/**
 * Styled componenet for paragraph wrapper.
 */
export const ParagraphWrapper = styled.div`
  ${mixins.HTWParagraphWrapper}

  right: -3.804rem;
  top: 12.383rem;
`;

/**
 * Styled component for paragraph background.
 */
export const ParagraphBackground = styled.img`
  ${mixins.HTWparagraphBackground}

  right: -10.444rem;
  top: -6.266rem;
  width: 63.037rem;
  height: 24.618rem;
`;

/**
 * Styled component for title wrapper.
 */
export const TitleWrapper = styled.div`
  margin-bottom: .373rem;
  z-index: 1;
`;

/**
 * Styled component for title.
 */
export const Title = styled.h1`
  ${mixins.LandingTitle}
`;

/**
 * Styled component for section text.
 */
export const Text = styled.p`
  ${mixins.LandingBlockText}
`;

/**
 * Styled component for section image wrapper.
 */
export const ImageWrapper = styled.div`
  display: flex;
  padding-top: .298rem;
  padding-left: 20.888rem;
`;

/**
 * Styled component for section image.
 */
export const Image = styled.img`
  width: 29.84rem;
  height: 33.663rem;
  user-select: none;
  filter: ${cssVars.sectionShadow};
`;
