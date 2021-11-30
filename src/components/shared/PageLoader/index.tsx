import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';

export default styled.div<{ isTransparent?: boolean; }>`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${cssVars.zIndexPageLoader};
  background-color: #fff;
  opacity: ${props => (props.isTransparent ? '.8' : '1')};
`;
