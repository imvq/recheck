import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';
import mixins from 'commons/styles/mixins';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/functions';

export const BoardWrapper = styled.div`
  margin-top: 5rem;

  ${respond(screenBreakpoints.XS)} {
    margin: 1rem;
  }
`;

export const Board = styled.div<{ backgroundSource: string }>`
  width: 25.643rem;
  height: 20.888rem;
  background: url(${props => props.backgroundSource});
  background-repeat: no-repeat;
  background-size: cover;
  filter: drop-shadow(.5rem .3125rem .5rem rgba(0, 0, 0, .25));
`;

export const ParagraphWrapper = styled.div`
  padding-top: 6.415rem;
  padding-left: 2.238rem;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  margin-bottom: .298rem;
`;

export const Title = styled.h1`
  ${mixins.InfoblockSubsectionTitle}
`;

export const TitleText = styled.span``;

export const TitleColorpickMain = styled.span`
  ${mixins.InfoblockSubsectionTitle}

  color: ${cssVars.colorForegroundPickMain};
`;

export const TitleColorpickAux1 = styled.span`
  ${mixins.InfoblockSubsectionTitle}

  color: ${cssVars.colorForegroundPickAux1};
`;

export const Text = styled.p`
  font-size: 1.342rem;
  line-height: 1.939rem;
  max-width: 21.634rem;
  user-select: none;
`;
