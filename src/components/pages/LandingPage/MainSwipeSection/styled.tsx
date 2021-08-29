import styled from 'styled-components';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/misc';

export const Wrapper = styled.div`
  margin-bottom: 15rem;
  display: grid;
  grid-template:
    'TitleView' 14.5rem
    'CardsView' 35.785rem;
  
  ${respond(screenBreakpoints.XS)} {
    display: none;
  }
`;

export const TitleOuterWrapper = styled.div`
  grid-area: TitleView;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const TitleWrapper = styled.div`
  margin-top: 1rem;
`;

export const TitleText = styled.span`
  font-weight: 600;
  font-size: 2.536rem;
`;
