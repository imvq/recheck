import styled from 'styled-components';

import BackgroundPath from 'assets/images/common/BackgroundDefault.png';
import Header from 'components/shared/Header';
import MainToolbar from 'components/shared/MainToolbar';

export const OwnProfilePage = styled.div`
  background-image: url(${BackgroundPath});
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

export const TitleWrapper = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 4rem 0;
`;

export const Title = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const AdaptedHeader = styled(Header)`
  grid-area: Header;
`;

export const ContentWrapper = styled.div`
  height: fit-content;
  min-height: calc(100vh - 8rem - 17.5rem);
  box-sizing: border-box;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
`;

export const Sidebar = styled(MainToolbar)`
  grid-area: Sidebar;
`;
