import ReviewStage2 from 'assets/images/pages/ReviewPage/ReviewStage2.png';
import {
  Wrapper, AdaptedHeader, AdaptedFooter,
  ContentWrapper, StageBreadcrumpWrapper, StageBreadcrumpImage
} from './styled';

export default () => (
  <Wrapper>
    <AdaptedHeader />
    <ContentWrapper>
      <StageBreadcrumpWrapper>
        <StageBreadcrumpImage src={ReviewStage2} draggable='false' />
      </StageBreadcrumpWrapper>
      kuku
    </ContentWrapper>
    <AdaptedFooter />
  </Wrapper>
);
