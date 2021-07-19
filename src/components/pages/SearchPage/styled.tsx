import styled from 'styled-components';

import { respondUp } from 'utils/functions';
import { cssVars } from 'utils/style.common';
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

export const TitleWrapper = styled.div`
  padding: 4rem 0 2rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ResultsWrapper = styled.div`
  margin: 1rem 0 1rem;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  padding: 1rem;
`;

export const SpanWrapper = styled.div`
  padding: 4rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 1.5rem;
  line-height: 3rem;
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  padding: 2rem 0 0;
`;

export const Sidebar = styled(MainToolbar)`
  grid-area: Sidebar;
`;

export const ExpandLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 0 2rem 0;

  ${respondUp('2400px')} {
    padding: initial;
    justify-content: center;
  }
`;

export const ExpandLabel = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: gray;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const DropListWrapper = styled.div`
  position: relative;
  width: ${cssVars.searchInputWidth};
`;
