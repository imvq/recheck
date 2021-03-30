import styled from 'styled-components';

import { cssVars, mixins } from 'style.common';
import { respond, ScreenBreakpoint } from 'tools.common';

/**
 * Styled component for first step section wrapper.
 */
export const Wrapper = styled.div`
  ${mixins.HTWLeftOrientedSectionWrapper}

  grid-area: StepFirstView;

  ${respond(ScreenBreakpoint.XS)} {
    ${mixins.HTWBadge};
  }
`;

/**
 * Styled component for wrapper making section content be centrazlized.
 */
export const CentralizingBox = styled.div`
  ${mixins.HTWLeftOrientedCentralizingBox}
`;

/**
 * Styled componenet for paragraph wrapper.
 */
export const ParagraphWrapper = styled.div`
  ${mixins.HTWParagraphWrapper}

  left: 7.087rem;
  top: 12.3836rem;
`;

/**
 * Styled component for paragraph background.
 */
export const ParagraphBackground = styled.img`
  ${mixins.HTWparagraphBackground}

  right: -8.952rem;
  top: -7.46rem;
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
  padding-top: 4.058rem;
  padding-right: 18.65rem;
`;

/**
 * Styled component for section image.
 */
export const Image = styled.img`
  width: 29.84rem;
  height: 29.84rem;
  user-select: none;
  filter: ${cssVars.sectionShadow};
`;
