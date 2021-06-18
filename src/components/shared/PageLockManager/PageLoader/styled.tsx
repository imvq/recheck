import styled from 'styled-components';

import { cssVars } from 'utils/style.common';

export const DimmedSpace = styled.div`
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
