import ScrollToTopWrapper from 'react-scroll-up';

import { StyledScrollButton } from './styled';

/**
 * Button to automatically scroll the page up.
 */
export default () => (
  <ScrollToTopWrapper showUnder={150}>
    <StyledScrollButton />
    <span>Наверх</span>
  </ScrollToTopWrapper>
);
