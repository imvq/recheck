import styled from 'styled-components';

import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

/**
 * Styled component for Head.
 */
export default styled.div`
  grid-area: Head;
  display: grid;
  grid-template:
    'LogoWrapper TabSection TelegramWrapper' 1fr / 1fr 30rem 1fr;
  
  ${respond(ScreenBreakpoint.XS)} {
    display: flex;
    justify-content: space-evenly;
    background-color: $color-background-default;
  }
`;
