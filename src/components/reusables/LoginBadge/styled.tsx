import styled from 'styled-components';

import { animations, cssVars, mixins } from 'style.common';
import { ReactComponent as CabinetSvg } from 'assets/images/pages/LandingPage/GreetingsSection/Head/CabinetIcon.svg';

const cssVarsLocal = {
  widthOffset: '12rem'
};

/**
 * Styled component for badge outer wrapper.
 */
export const Wrapper = styled.div`
  position: relative;
`;

/**
 * Styled component for login button.
 */
export const LoginButton = styled(CabinetSvg)`
  ${mixins.DefaultButton}

  width: calc(
      ${cssVars.greetingsViewHeadEdgeElemsWidthBase}
    - ${cssVarsLocal.widthOffset}
  );
  opacity: ${cssVars.opacityButtonIdleInversed};
  filter: alpha(opacity=${cssVars.opacityButtonIdleInversed} * 100);
`;

/**
 * Styled component for badge menu.
 */
export const Menu = styled.ul<{ isExpanded: boolean }>`
  display: ${props => (props.isExpanded ? 'block' : 'none')};
  position: absolute;
  right: 0;
  user-select: none;
`;

/**
 * Styled component for clickable menu entry.
 */
export const MenuEntry = styled.li`
  cursor: pointer;
  width: 22rem;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: .8rem;
  border-radius: .4rem;
  background-color: #f0f3ff;
  filter: drop-shadow(.2rem .4rem .2rem rgba(0, 0, 0, .25));

  &:hover {
    background-color: #cacdd6;
  }

  &:active {
    background-color: #9fa1a7;
  }
`;

/**
 * Styled component for door SVG wrapper.
 */
export const DoorWrapper = styled.div`
  margin-right: .2rem;

  &>svg {
    height: 3rem;
  }
`;
