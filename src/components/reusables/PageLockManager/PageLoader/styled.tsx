import styled from 'styled-components';

import { ReactComponent as LoaderCircle } from 'assets/images/reusables/PageLoader/LoaderCircle.svg';
import { cssVars } from 'style.common';

/**
 * Styled component for page loader wrapper.
 */
export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${cssVars.zIndexPageLoader};
  background-color: #fff;
  opacity: .8;
`;

/**
 * Styled component for loader circle.
 */
export const Loader = styled(LoaderCircle)`
  width: 50%;
  height: fit-content;
`;
