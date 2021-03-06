import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';
import mixins from 'commons/styles/mixins';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/misc';

export const Wrapper = styled.div`
  ${mixins.HTWLeftOrientedSectionWrapper}

  grid-area: StepThirdView;

  ${respond(screenBreakpoints.XS)} {
    ${mixins.HTWBadge};
  }
`;

export const CentralizingBox = mixins.prepared.HTWLeftOrientedCentralizedBox;

export const ParagraphWrapper = styled.div`
  ${mixins.HTWParagraphWrapper}

  left: 4.774rem;
  top: 14.92rem;
`;

export const ParagraphBackground = styled.img`
  ${mixins.HTWparagraphBackground}

  right: -10.444rem;
  top: -7.46rem;
  width: 64.902rem;
  height: 26.483rem;
`;

export const TitleWrapper = styled.div`
  margin-top: -1.1936rem;
  margin-bottom: .373rem;
  z-index: 1;
`;

export const Title = mixins.prepared.LandingTitle;

export const TitleText = mixins.prepared.DefaultSpan;

export const TitleHightlightedMain = styled.span`
  ${mixins.LandingTitle}

  color: ${cssVars.colorForegroundPickMain};
`;

export const TitleHightlightedAux1 = styled.span`
  ${mixins.LandingTitle}

  color: ${cssVars.colorForegroundPickAux1};
`;

export const Text = styled.p`
  ${mixins.LandingBlockText}

  max-width: 35.808rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 4.058rem;
  padding-right: 18.65rem;
`;

export const Image = styled.img`
  width: 29.84rem;
  height: 29.84rem;
  user-select: none;
  filter: ${cssVars.sectionShadow};
`;
