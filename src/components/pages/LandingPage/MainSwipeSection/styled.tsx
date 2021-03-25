import styled from 'styled-components';

import { respond, ScreenBreakpoint } from 'tools.common';

/**
 * Styled component for swipe section outer wrapper.
 */
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