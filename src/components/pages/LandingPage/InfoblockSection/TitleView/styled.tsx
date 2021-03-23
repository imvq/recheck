import styled from 'styled-components';

import { cssVars } from 'style.common';
import { respond, ScreenBreakpoint } from 'tools.common';

/**
 * Styled component for title outer wrapper.
 */
export const Wrapper = styled.div`
  grid-area: TitleView;
  display: flex;
  justify-content: center;
  text-align: center;
`;

/**
 * Styled component for title text wrapper.
 */
export const TextWrapper = styled.div`
  margin-top: 11.309rem;

  ${respond(ScreenBreakpoint.XS)} {
    margin-top: 5rem;
  }
`;

/**
 * Styled component for title text.
 */
export const Text = styled.span`
  font-family: Open Sans;
    font-weight: 600;
  font-size: 2.536rem;
`;

/**
 * Styled component for title text.
 */
export const TextColorpickMain = styled(Text)`
  color: ${cssVars.colorForegroundPickMain};
`;

/**
* Styled component for title text.
*/
export const TextColorpickAux1 = styled(Text)`
  color: ${cssVars.colorForegroundPickAux1};
`;
