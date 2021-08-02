import { memo } from 'react';

import * as styled from './styled';

/**
 * Title of motivator section.
 */
export default memo(() => (
  <styled.Wrapper>
    <styled.TextWrapper>
      <styled.Text>Нанимайте проще, быстрее, точнее!</styled.Text>
    </styled.TextWrapper>
  </styled.Wrapper>
));
