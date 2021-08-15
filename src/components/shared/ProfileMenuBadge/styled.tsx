import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';
import mixins from 'commons/styles/mixins';
import { ReactComponent as CabinetSvg } from 'assets/images/shared/ProfileMenuBadge/Cabinet.svg';

const cssVarsLocal = {
  widthOffset: '12rem'
};

export const Wrapper = styled.div`
  position: relative;
  z-index: ${cssVars.zIndexLoginBadge};
`;

export const LoginButton = styled(CabinetSvg)`
  ${mixins.DefaultButton}

  width: calc(
      ${cssVars.greetingsViewHeadEdgeElemsWidthBase}
    - ${cssVarsLocal.widthOffset}
  );
  opacity: ${cssVars.opacityButtonIdleInversed};
  filter: alpha(opacity=${cssVars.opacityButtonIdleInversed} * 100);
`;

export const Menu = styled.ul<{ isExpanded: boolean }>`
  display: ${props => (props.isExpanded ? 'block' : 'none')};
  position: absolute;
  right: 0;
  user-select: none;
  border-radius: .4rem;
`;

export const MenuEntry = styled.li`
  cursor: pointer;
  width: 22rem;
  font-weight: 600;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: .8rem;
  background-color: #f0f3ff;
  filter: drop-shadow(.2rem .4rem .2rem rgba(0, 0, 0, .25));

  &:hover {
    background-color: #cacdd6;
  }

  &:active {
    background-color: #9fa1a7;
  }
`;

export const SvgWrapper = styled.div`
  margin-right: .2rem;

  &>svg {
    height: 3rem;
  }
`;
