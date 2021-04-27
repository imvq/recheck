import SearchField from './SearchField';
import { Wrapper, AdaptedHeader, AdaptedFooter, ContentWrapper, TitleWrapper, Title } from './styled';

export default () => (
  <Wrapper>
    <AdaptedHeader />
    <ContentWrapper>
      <SearchField />
      <TitleWrapper><Title>Результат поиска:</Title></TitleWrapper>
    </ContentWrapper>
    <AdaptedFooter />
  </Wrapper>
);
