import styled from 'styled-components';

import Footer from 'components/shared/Footer';
import Header from 'components/shared/Header';
import MainToolbar from 'components/shared/MainToolbar';

export const ObservedProfilePage = styled.div`
  background-color: white;
  min-height: 100%;
  display: grid;
  grid-template:
    'Sidebar Header'  auto
    'Sidebar Content' 1fr
    'Footer  Footer'  auto / 20rem 1fr;
`;

interface AdaptedHeaderProps {
  id?: string;
}

export const AdaptedHeader = styled(Header)<AdaptedHeaderProps>`
  grid-area: Header;
`;

export const AdaptedFooter = styled(Footer)`
  grid-area: Footer;
`;

export const Sidebar = styled(MainToolbar)`
  grid-area: Sidebar;
`;
