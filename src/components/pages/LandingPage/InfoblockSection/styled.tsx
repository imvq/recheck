import styled from 'styled-components';

import { respond, ScreenBreakpoint } from 'tools.common';

/**
 * Styled component for infoblock section main wrapper.
 */
export const Wrapper = styled.div`
  display: grid;
  grid-template:
    'TitleView TitleView TitleView'          17.904rem
    'InfoTimeSave InfoEasement InfoWarranty' 35.785rem / 1fr 36.295rem 1fr;
  
  ${respond(ScreenBreakpoint.XS)} {
    grid-template:
      'TitleView'    12rem
      'InfoTimeSave' 25rem
      'InfoEasement' 25rem
      'InfoWarranty' 25rem;
  }
`;
