import styled from 'styled-components';

import { cssVars } from 'utils/style.common';
import { ReactComponent as LogoSvg } from 'assets/images/common/LogoFull.svg';

/**
 * Website logo.
 */
export default styled(LogoSvg)`
  cursor: pointer;
  width: ${cssVars.greetingsViewHeadEdgeElemsWidthBase};
  height: ${cssVars.logoRectHeightBase};
`;
