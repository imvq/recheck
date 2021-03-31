import styled from 'styled-components';

import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

/**
 * Styled component for warranty subsection outer wrapper.
 */
export const Wrapper = styled.div`
  grid-area: InfoWarranty;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${respond(ScreenBreakpoint.XS)} {
    justify-content: center;
  }
`;
