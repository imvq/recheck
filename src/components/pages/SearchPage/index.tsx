import PersonCard from 'components/shared/PersonCard';
import TestPhoto from 'assets/images/common/TestPhoto.png';
import SearchField from './SearchField';
import {
  Wrapper, AdaptedHeader, AdaptedFooter, ContentWrapper,
  TitleWrapper, Title, ResultsWrapper
} from './styled';

const testPerson = {
  name: 'Екатерина Мазур',
  position: 'Head of Support',
  company: 'Kyivstar',
  photoUrl: TestPhoto
};

export default () => (
  <Wrapper>
    <AdaptedHeader />
    <ContentWrapper>
      <SearchField />
      <TitleWrapper><Title>Результат поиска:</Title></TitleWrapper>
      <ResultsWrapper>
        <PersonCard {...testPerson} />
      </ResultsWrapper>
    </ContentWrapper>
    <AdaptedFooter />
  </Wrapper>
);
