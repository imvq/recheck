import styled from 'styled-components';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/functions';

export const Wrapper = styled.div`
  height: 8rem;
  display: flex;
  justify-content: flex-end;
  
  ${respond(screenBreakpoints.XS)} {
    background-color: #fbfbff;
  }
`;

export const LoginBadgeWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 5rem 0;
  align-items: center;

  ${respond(screenBreakpoints.XS)} {
    margin: 0;
  }
`;
