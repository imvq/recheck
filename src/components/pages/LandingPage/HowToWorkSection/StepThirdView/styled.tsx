import styled from 'styled-components';

import { cssVars, mixins } from 'utils/style.common';
import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

/**
 * Styled component for third step section wrapper.
 */
export const Wrapper = styled.div`
  ${mixins.HTWLeftOrientedSectionWrapper}

  grid-area: StepThirdView;

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

  left: 4.774rem;
  top: 14.92rem;
`;

/**
 * Styled component for paragraph background.
 */
export const ParagraphBackground = styled.img`
  ${mixins.HTWparagraphBackground}

  right: -10.444rem;
  top: -7.46rem;
  width: 64.902rem;
  height: 26.483rem;
`;

/**
 * Styled component for title wrapper.
 */
export const TitleWrapper = styled.div`
  margin-top: -1.1936rem;
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
 * Styled component for title.
 */
export const TitleHightlightedMain = styled.span`
  ${mixins.LandingTitle}

  color: ${cssVars.colorForegroundPickMain};
`;

/**
 * Styled component for title.
 */
export const TitleHightlightedAux1 = styled.span`
  ${mixins.LandingTitle}

  color: ${cssVars.colorForegroundPickAux1};
`;

/**
 * Styled component for section text.
 */
export const Text = styled.p`
  ${mixins.LandingBlockText}

  max-width: 35.808rem;
`;

/**
 * Styled component for section image wrapper.
 */
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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
