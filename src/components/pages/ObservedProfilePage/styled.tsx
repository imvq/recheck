import styled from 'styled-components';

import Footer from 'components/shared/Footer';
import Header from 'components/shared/Header';
import MainToolbar from 'components/shared/MainToolbar';
import mixins from 'commons/styles/mixins';

export const ObservedProfilePage = styled.div`
  background-color: white;
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
`;

export const Sidebar = styled(MainToolbar)`
  grid-area: Sidebar;
`;

export const ReviewSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0 3rem;
`;

export const BackButtonWrapper = styled.div`
  ${mixins.DefaultButton};

  padding-left: 10rem;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 0 0 3rem;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 700;
  text-align: center;
`;

export const InnerSpan = styled(Title)`
  font-weight: inherit;
`;
