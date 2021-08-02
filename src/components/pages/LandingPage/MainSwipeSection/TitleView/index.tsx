import { memo } from 'react';

import * as styled from './styled';

/**
 * Title of swipe section.
 */
export default memo(() => (
  <styled.Wrapper id='MainSwipeViewTitle'>
    <styled.TitleWrapper>
      <styled.Text>Примеры отзывов о кандидатах</styled.Text>
    </styled.TitleWrapper>
  </styled.Wrapper>
));
