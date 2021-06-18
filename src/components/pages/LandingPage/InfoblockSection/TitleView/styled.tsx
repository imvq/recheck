import styled from 'styled-components';

import { cssVars } from 'utils/style.common';
import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

export const Wrapper = styled.div`
  grid-area: TitleView;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const TextWrapper = styled.div`
  margin-top: 11.309rem;

  ${respond(ScreenBreakpoint.XS)} {
    margin-top: 5rem;
  }
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 2.536rem;
`;

export const TextColorpickMain = styled(Text)`
  color: ${cssVars.colorForegroundPickMain};
`;

export const TextColorpickAux1 = styled(Text)`
  color: ${cssVars.colorForegroundPickAux1};
`;
