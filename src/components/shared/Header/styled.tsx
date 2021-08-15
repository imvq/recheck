import styled from 'styled-components';

import { ScreenBreakpoint } from 'commons/utils/enums';
import { respond } from 'commons/utils/functions';

export const Wrapper = styled.div`
  height: 8rem;
  display: flex;
  justify-content: flex-end;
  
  ${respond(ScreenBreakpoint.XS)} {
    background-color: #fbfbff;
  }
`;

export const LoginBadgeWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 5rem 0;
  align-items: center;

  ${respond(ScreenBreakpoint.XS)} {
    margin: 0;
  }
`;
