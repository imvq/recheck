import styled from 'styled-components';

import { cssVars } from 'style.common';
import { respond, ScreenBreakpoint } from 'tools.common';

/**
 * Styled component for 'How to work' section main wrapper.
 */
export const Wrapper = styled.div`
  display: grid;
  grid-template:
    'TitleView'      17.910rem
    'StepFirstView'  35.798rem
    'StepSecondView' 35.798rem
    'StepThirdView'  35.798rem;
  margin-top: 5rem;

  ${respond(ScreenBreakpoint.XS)} {
    grid-template:
      'TitleView'      15rem
      'StepFirstView'  15rem
      'StepSecondView' 15rem
      'StepThirdView'  15rem;
    margin-top: 0;
  }
`;
