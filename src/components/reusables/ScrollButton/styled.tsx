import styled from 'styled-components';

import { ReactComponent as ArrowUpSvg } from 'assets/images/reusables/ScrollButton/ArrowUp.svg';

/**
 * Mouse-reacting customization for arrow button.
 */
export const StyledScrollButton = styled(ArrowUpSvg)`
  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(70%);
  }
`;
