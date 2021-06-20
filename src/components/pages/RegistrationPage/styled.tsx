import styled from 'styled-components';

import BackgroundSvgPath from 'assets/images/common/Background1.png';
import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';

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

export const StageBreadcrumpWrapper = styled.div`
  width: 55rem;
  margin-bottom: 5rem;
`;

export const StageBreadcrumpImage = styled.img`
  width: 100%;
`;
