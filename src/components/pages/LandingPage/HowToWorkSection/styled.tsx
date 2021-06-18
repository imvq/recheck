import styled from 'styled-components';

import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

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
      'TitleView TitleView      TitleView' 15rem
      '.         StepFirstView          .' 20rem
      '.         StepSecondView         .' 20rem
      '.         StepThirdView          .' 20rem / 10vw 80vw 10vw;
    margin-top: 0;
  }
`;
