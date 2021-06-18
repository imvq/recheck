import styled from 'styled-components';

import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

export const Wrapper = styled.div`
  grid-area: InfoTimeSave;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${respond(ScreenBreakpoint.XS)} {
    justify-content: center;
  }
`;
