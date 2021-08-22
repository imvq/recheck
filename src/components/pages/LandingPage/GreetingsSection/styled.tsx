import styled from 'styled-components';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/functions';
import RectUpper from 'assets/images/pages/LandingPage/GreetingsSection/RectUpper.svg';

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  grid-area: GreetingsView;
  background-image: url(${RectUpper});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  display: grid;
  grid-template:
    'Head'     8rem
    'Content'  45rem;
  
  ${respond(screenBreakpoints.XS)} {
    background-image: none;
    background-color: lighten(#e9edfb, 2);

    grid-template:
      'Head'     8rem
      'Content'  50rem;
  }
`;
