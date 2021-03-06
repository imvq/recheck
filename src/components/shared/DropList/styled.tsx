import styled from 'styled-components';

import animations from 'commons/styles/animations';
import cssVars from 'commons/styles/cssVars';

export const DropList = styled.div`
  animation: ${animations.fadeDefault} .25s;

  width: 100%;
  position: absolute;
  left: 0;
  z-index: ${cssVars.zIndexSelectMenuLayer2};
`;

export const Content = styled.div`
  width: 100%;
  max-height: calc(${cssVars.inputHeightDefault} * 5);
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
