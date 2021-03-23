import { Link as ScrollLink } from 'react-scroll';

import { Wrapper, TabButton } from './styled';

/**
 * Head buttons section.
 */
export default () => (
  <Wrapper>
    <ScrollLink to='HowToWorkTitle' smooth duration={300}>
      <TabButton>О платформе</TabButton>
    </ScrollLink>
    <ScrollLink to='InfoblockTitle' smooth duration={600}>
      <TabButton>Преимущества</TabButton>
    </ScrollLink>
    <ScrollLink to='MainSwipeViewTitle' smooth duration={900}>
      <TabButton>Отзывы</TabButton>
    </ScrollLink>
  </Wrapper>
);
