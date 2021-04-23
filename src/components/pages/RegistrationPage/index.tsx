import ScaleStage2 from 'assets/images/pages/RegistrationPage/ScaleStage2.png';
import {
  Wrapper, AdaptedHeader, AdaptedFooter,
  ContentWrapper, StageBreadcrumpWrapper, StageBreadcrumpImage
} from './styled';
import RegistrationBox from './RegistrationBox';

export default () => (
  <Wrapper>
    <AdaptedHeader />
    <ContentWrapper>
      <StageBreadcrumpWrapper>
        <StageBreadcrumpImage src={ScaleStage2} draggable='false' />
      </StageBreadcrumpWrapper>
      <RegistrationBox />
    </ContentWrapper>
    <AdaptedFooter />
  </Wrapper>
);
