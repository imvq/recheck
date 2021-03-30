import styled from 'styled-components';

import Header from 'components/reusables/Header';
import Footer from 'components/reusables/Footer';

/**
 * Styled component for main profile page wrapper.
 */
export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template:
    'Header'
    'Content'
    'Footer';
`;

/**
 * Header with grid applied to.
 */
export const AdaptedHeader = styled(Header)`
  grid-area: Header;
`;

export const AdaptedFooter = styled(Footer)`
  grid-area: Footer;
`;
