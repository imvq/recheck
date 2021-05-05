import styled from 'styled-components';

import BackgroundSvgPath from 'assets/images/pages/ReviewPage/Background.svg';
import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';

/**
 * Styled component for main profile page wrapper.
 */
export const Wrapper = styled.div`
  background-image: url(${BackgroundSvgPath});
  background-size: cover;
  min-height: 100%;
  display: grid;
  grid-template:
    'Header'
    'Content' 1fr
    'Footer';
`;

/**
 * Header with grid-area applied to.
 */
export const AdaptedHeader = styled(Header)`
  grid-area: Header;
`;

/**
 * Header with grid-area applied to.
 */
export const AdaptedFooter = styled(Footer)`
  grid-area: Footer;
`;

export const ContentWrapper = styled.div`
  grid-area: Content;
  height: fit-content;
  box-sizing: border-box;
  padding: 2rem 20rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
