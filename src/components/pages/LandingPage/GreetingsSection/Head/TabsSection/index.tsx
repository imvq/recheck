import { memo } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import * as styled from './styled';

/**
 * Head buttons section.
 */
export default memo(() => (
  <styled.Wrapper>
    <ScrollLink to='HowToWorkTitle' smooth duration={300}>
      <styled.TabButton>О платформе</styled.TabButton>
    </ScrollLink>

    <ScrollLink to='InfoblockTitle' smooth duration={600}>
      <styled.TabButton>Преимущества</styled.TabButton>
    </ScrollLink>

    <ScrollLink to='MainSwipeViewTitle' smooth duration={900}>
      <styled.TabButton>Отзывы</styled.TabButton>
    </ScrollLink>
  </styled.Wrapper>
));
