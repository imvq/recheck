import styled from 'styled-components';

import { ReactComponent as ContentSvg } from 'assets/images/pages/ReviewIntroPage/Content.svg';
import BackgroundPath from 'assets/images/pages/ReviewIntroPage/Background.png';
import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';
import MainToolbar from 'components/shared/MainToolbar';

export const Wrapper = styled.div`
  background-size: cover;
  min-height: 100%;
  display: grid;
  grid-template:
    'Sidebar Header'  auto
    'Sidebar Content' 1fr
    'Footer  Footer'  auto / 20rem 1fr;
`;

export const AdaptedHeader = styled(Header)<{ id?: string; }>`
  grid-area: Header;
`;

export const AdaptedFooter = styled(Footer)`
  grid-area: Footer;
`;

export const Sidebar = styled(MainToolbar)`
  grid-area: Sidebar;
`;

export const ContentWrapper = styled.div`
  grid-area: Content;
  background-image: url(${BackgroundPath});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: fit-content;
  box-sizing: border-box;
  padding: 2rem 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled(ContentSvg)`
  cursor: pointer;
`;
