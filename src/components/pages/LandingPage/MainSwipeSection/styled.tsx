import styled from 'styled-components';

import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

export const Wrapper = styled.div`
  margin-bottom: 15rem;
  display: grid;
  grid-template:
    'TitleView' 14.5rem
    'CardsView' 35.785rem;
  
  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;
