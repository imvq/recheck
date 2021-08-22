import styled from 'styled-components';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/functions';

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
