import styled from 'styled-components';

import BackgroundSvgPath from 'assets/images/pages/RegistrationPage/Background.svg';
import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';
import MainToolbar from 'components/shared/MainToolbar';

export const Wrapper = styled.div`
  background-image: url(${BackgroundSvgPath});
  background-size: cover;
  min-height: 100%;
  display: grid;
  grid-template:
    'Sidebar Header'  auto
    'Sidebar Content' 1fr
    'Footer  Footer'  auto / 20rem 1fr;
`;

export const AdaptedHeader = styled(Header)<{ withoutLogo?: boolean; }>`
  grid-area: Header;
`;

export const AdaptedFooter = styled(Footer)`
  grid-area: Footer;
`;

export const ContentWrapper = styled.div`
  grid-area: Content;
  height: fit-content;
  box-sizing: border-box;
  padding: 2rem 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  padding: 4rem 0 2rem;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const ResultsWrapper = styled.div`
  margin: 1rem 0 1rem;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

export const PersonCardWrapper = styled.div`
  padding: 1rem;
`;

export const SpanWrapper = styled.div`
  padding: 4rem 0 2rem;
`;

export const Span = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
`;

export const Sidebar = styled(MainToolbar)`
  grid-area: Sidebar;
`;
