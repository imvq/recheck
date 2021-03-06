import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  z-index: ${cssVars.zIndexDimmingWrapper};
`;

export const ClickableBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
