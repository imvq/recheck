import styled from 'styled-components';

import { cssVars } from 'style.common';
import { ReactComponent as LogoSvg } from 'assets/svg/logo/LogoFull.svg';

/**
 * Website logo.
 */
export default styled(LogoSvg)`
  cursor: pointer;
  width: ${cssVars.greetingsViewHeadEdgeElemsWidthBase};
  height: ${cssVars.logoRectHeightBase};
`;
