import styled from 'styled-components';

import { cssVars } from 'utils/style.common';

export const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -${cssVars.inputHeightDefault};
`;

export const Content = styled.div`
  width: 100%;
  max-height: calc(${cssVars.inputHeightDefault} * 5);
  top: ${cssVars.inputHeightDefault};
  left: 0;
  box-sizing: border-box;
  border: calc(${cssVars.thiknessDefault} * 2) solid #c7c7c7;
  border-bottom-left-radius: calc(${cssVars.inputBorderRadiusDefault} * 2);
  border-bottom-right-radius: calc(${cssVars.inputBorderRadiusDefault} * 2);
  overflow: hidden;
  overflow-y: auto;
  background-color: white;
  z-index: ${cssVars.zIndexSelectMenu};
  cursor: pointer;
`;