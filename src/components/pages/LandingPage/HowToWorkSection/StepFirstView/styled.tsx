import styled from 'styled-components';

import { cssVars, mixins } from 'utils/style.common';
import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

export const Wrapper = styled.div`
  ${mixins.HTWLeftOrientedSectionWrapper}

  grid-area: StepFirstView;

  ${respond(ScreenBreakpoint.XS)} {
    ${mixins.HTWBadge};
  }
`;

export const CentralizingBox = styled.div`
  ${mixins.HTWLeftOrientedCentralizingBox}
`;

export const ParagraphWrapper = styled.div`
  ${mixins.HTWParagraphWrapper}

  left: 7.087rem;
  top: 12.3836rem;
`;

export const ParagraphBackground = styled.img`
  ${mixins.HTWparagraphBackground}

  right: -8.952rem;
  top: -7.46rem;
  width: 63.037rem;
  height: 24.618rem;
`;

export const TitleWrapper = styled.div`
  margin-bottom: .373rem;
  z-index: 1;
`;

export const Title = styled.h1`
  ${mixins.LandingTitle}
`;

export const Text = styled.p`
  ${mixins.LandingBlockText}
`;

export const ImageWrapper = styled.div`
  display: flex;
  padding-top: 4.058rem;
  padding-right: 18.65rem;
`;

export const Image = styled.img`
  width: 29.84rem;
  height: 29.84rem;
  user-select: none;
  filter: ${cssVars.sectionShadow};
`;
