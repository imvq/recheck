import styled from 'styled-components';

import Footer from 'components/shared/Footer';
import Header from 'components/shared/Header';

export const Wrapper = styled.div`
  background-color: white;
  min-height: 100%;
  display: grid;
  grid-template:
    'Header'
    'Content' 1fr
    'Footer';
`;

export const AdaptedHeader = styled(Header)`
  grid-area: Header;
`;

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

export const ProfileHeadWrapper = styled.div`
  padding-bottom: 2rem;
`;
