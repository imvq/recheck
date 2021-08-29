import styled from 'styled-components';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/misc';

export const Wrapper = styled.div`
  grid-area: InfoTimeSave;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${respond(screenBreakpoints.XS)} {
    justify-content: center;
  }
`;
