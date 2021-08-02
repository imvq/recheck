import { memo } from 'react';

import * as styled from './styled';

/**
 * Rocket and its path (represented as a separate object).
 */
export default memo(() => (
  <styled.Wrapper>
    <styled.Line />
    <styled.Rocket />
  </styled.Wrapper>
));
