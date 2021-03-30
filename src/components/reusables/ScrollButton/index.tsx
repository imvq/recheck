import ScrollToTopWrapper from 'react-scroll-up';

import { StyledScrollButton } from './styled';

/**
 * Button to automatically scroll the page up.
 */
export default () => (
  <ScrollToTopWrapper
    showUnder={150}
    style={{
      bottom: '10rem',
      width: '6rem',
      fontSize: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <StyledScrollButton />
    <span>Наверх</span>
  </ScrollToTopWrapper>
);
