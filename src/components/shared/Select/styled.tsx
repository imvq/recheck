import styled from 'styled-components';

import { cssVars, mixins } from 'utils/style.common';

export const Wrapper = styled.div<{ isDimmed?: boolean; }>`
  ${mixins.DefaultInput};

  color: ${props => (props.isDimmed ? 'grey' : 'black')};
  cursor: pointer;
  user-select: none;
`;

export const Arrow = styled.div`
  
`;
