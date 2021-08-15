import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';
import { ReactComponent as LogoSvg } from 'assets/images/common/LogoFull.svg';

export default styled(LogoSvg)`
  cursor: pointer;
  width: ${cssVars.greetingsViewHeadEdgeElemsWidthBase};
  height: ${cssVars.logoRectHeightBase};
`;
