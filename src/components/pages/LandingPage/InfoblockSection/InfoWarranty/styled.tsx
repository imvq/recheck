import styled from 'styled-components';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/functions';

export const Wrapper = styled.div`
  grid-area: InfoWarranty;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${respond(screenBreakpoints.XS)} {
    justify-content: center;
  }
`;
