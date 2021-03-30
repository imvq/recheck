import styled from 'styled-components';

import { cssVars } from 'style.common';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 12rem;
  background-color: #e1e6fb;
  z-index: ${cssVars.zIndexPopupCookie};
`;
