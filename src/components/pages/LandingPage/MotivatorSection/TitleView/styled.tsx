import styled from 'styled-components';

import { ScreenBreakpoint } from 'commons/utils/enums';
import { respond } from 'commons/utils/functions';

export const Wrapper = styled.div`
  grid-area: TitleView;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
`;

export const TextWrapper = styled.div`
  margin-top: 1rem;

  ${respond(ScreenBreakpoint.XS)} {
    margin-top: 5rem;
  }
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 2.536rem;
`;
