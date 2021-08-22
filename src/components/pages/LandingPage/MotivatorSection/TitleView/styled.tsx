import styled from 'styled-components';

import { screenBreakpoints } from 'commons/types/unions';
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

  ${respond(screenBreakpoints.XS)} {
    margin-top: 5rem;
  }
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 2.536rem;
`;
