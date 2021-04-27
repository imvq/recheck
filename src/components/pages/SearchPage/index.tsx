import SearchField from './SearchField';
import { Wrapper, AdaptedHeader, AdaptedFooter, ContentWrapper } from './styled';

export default () => (
  <Wrapper>
    <AdaptedHeader />
    <ContentWrapper>
      <SearchField />
    </ContentWrapper>
    <AdaptedFooter />
  </Wrapper>
);
