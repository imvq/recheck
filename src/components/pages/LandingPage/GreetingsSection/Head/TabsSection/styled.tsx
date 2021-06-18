import styled from 'styled-components';

import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

export const Wrapper = styled.div`
  grid-area: TabSection;
  display: flex;
  justify-content: space-between;
  padding-top: .2rem;
  align-items: center;

  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;

export const TabButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  font-size: 1.3rem;
`;
