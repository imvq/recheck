import styled from 'styled-components';

import { cssVars, mixins } from 'style.common';
import { respond, ScreenBreakpoint } from 'tools.common';

/**
 * Styled component for board wrapper.
 */
export const BoardWrapper = styled.div`
  margin-top: 5rem;

  ${respond(ScreenBreakpoint.XS)} {
    margin: 1rem;
  }
`;

/**
 * Styled component for board.
 */
export const Board = styled.div<{ backgroundSource: string }>`
  width: 25.643rem;
  height: 20.888rem;
  background: url(${props => props.backgroundSource});
  background-repeat: no-repeat;
  background-size: cover;
  filter: drop-shadow(.5rem .3125rem .5rem rgba(0, 0, 0, .25));
`;

/**
 * Styled component for paragraph wrapper.
 */
export const ParagraphWrapper = styled.div`
  padding-top: 6.415rem;
  padding-left: 2.238rem;
  height: 100%;
`;

/**
 * Styled component for title wrapper.
 */
export const TitleWrapper = styled.div`
  margin-bottom: .298rem;
`;

/**
 * Styled component for title.
 */
export const Title = styled.h1`
  ${mixins.InfoblockSubsectionTitle}
`;

/**
 * Styled component for inner title span.
 */
export const TitleColorpickMain = styled.span`
  ${mixins.InfoblockSubsectionTitle}

  color: ${cssVars.colorForegroundPickMain};
`;

/**
 * Styled component for inner title span.
 */
export const TitleColorpickAux1 = styled.span`
  ${mixins.InfoblockSubsectionTitle}

  color: ${cssVars.colorForegroundPickAux1};
`;

/**
 * Styled component for text block.
 */
export const Text = styled.p`
  font-family: Open Sans;
  font-size: 1.342rem;
  line-height: 1.939rem;
  max-width: 21.634rem;
  user-select: none;
`;
