import styled from 'styled-components';

import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

/**
 * Styled component for title outer wrapper.
 */
export const Wrapper = styled.div`
  grid-area: TitleView;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
`;

/**
 * Styled component for title text wrapper.
 */
export const TextWrapper = styled.div`
  margin-top: 1rem;

  ${respond(ScreenBreakpoint.XS)} {
    margin-top: 5rem;
  }
`;

/**
 * Styled component for title text.
 */
export const Text = styled.span`
  font-weight: 600;
  font-size: 2.536rem;
`;
