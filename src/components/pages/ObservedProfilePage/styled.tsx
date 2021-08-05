import styled from 'styled-components';

import BackgroundSvgPath from 'assets/images/common/Background1.png';
import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';
import MainToolbar from 'components/shared/MainToolbar';

export const Wrapper = styled.div`
  background-image: url(${BackgroundSvgPath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
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

export const ContentWrapper = styled.div`
  position: relative;
  grid-area: Content;
  height: fit-content;
  box-sizing: border-box;
  padding: 2rem 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Sidebar = styled(MainToolbar)`
  grid-area: Sidebar;
`;
