import styled from 'styled-components';

import { cssVars, mixins } from 'utils/style.common';
import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

export const Wrapper = styled.div`
  grid-area: StepSecondView;
  display: grid;
  grid-template: 'Main Aux' 1fr / 1fr 1fr;

  ${respond(ScreenBreakpoint.XS)} {
    ${mixins.HTWBadge};

    display: flex;
    align-items: center;
  }
`;

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

export const ParagraphWrapper = styled.div`
  ${mixins.HTWParagraphWrapper}

  right: -3.804rem;
  top: 12.383rem;
`;

export const ParagraphBackground = styled.img`
  ${mixins.HTWparagraphBackground}

  right: -10.444rem;
  top: -6.266rem;
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
  padding-top: .298rem;
  padding-left: 20.888rem;
`;

export const Image = styled.img`
  width: 29.84rem;
  height: 33.663rem;
  user-select: none;
  filter: ${cssVars.sectionShadow};
`;
