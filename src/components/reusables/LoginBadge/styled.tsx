import styled from 'styled-components';

import { cssVars, mixins } from 'style.common';
import { ReactComponent as CabinetSvg } from 'assets/images/pages/LandingPage/GreetingsSection/Head/CabinetIcon.svg';

const cssVarsLocal = {
  widthOffset: '12rem'
};

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
  visibility: ${props => (props.isExpanded ? 'visible' : 'hidden')};
  position: absolute;
`;

export const MenuEntry = styled.li`
  background-color: red;
`;
