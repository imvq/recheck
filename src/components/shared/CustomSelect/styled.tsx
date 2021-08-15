import styled, { css } from 'styled-components';

import cssVars from 'commons/styles/cssVars';
import mixins from 'commons/styles/mixins';
import { ReactComponent as ArrowUpSvg } from 'assets/images/shared/CustomSelect/ArrowUp.svg';
import { ReactComponent as ArrowDownSvg } from 'assets/images/shared/CustomSelect/ArrowDown.svg';

const mixinsLocal = {
  Arrow: css`
    position: absolute;
    right: 1rem;
    width: 1.2rem;
  `
};

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
`;

export const SelectedItemWrapper = styled.div<{ isDimmed?: boolean; }>`
  ${mixins.DefaultInput};

  display: flex;
  align-items: center;
  color: ${props => (props.isDimmed ? 'grey' : 'black')};

  &:hover {
    filter: brightness(99.2%);
  }

  &:active {
    filter: brightness(98.2%);
  }
`;

export const ArrowUp = styled(ArrowUpSvg)`
  ${mixinsLocal.Arrow};
`;

export const ArrowDown = styled(ArrowDownSvg)`
  ${mixinsLocal.Arrow};
`;

export const OptionsBadgesWrapper = styled.div`
  width: 100%;
  max-height: calc(${cssVars.inputHeightDefault} * 5);
  position: absolute;
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
`;
