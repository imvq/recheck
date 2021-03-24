import styled from 'styled-components';

import { cssVars, mixins } from 'style.common';
import { ReactComponent as CabinetSvg } from 'assets/images/pages/LandingPage/GreetingsSection/Head/CabinetIcon.svg';

const cssVarsLocal = {
  widthOffset: '12rem'
};

/**
 * Login button.
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
