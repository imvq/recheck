import PictureSvg from 'assets/svg/LandingPage/HowToWorkView/StepFirst/Pic.svg';
import ParagraphBackgroundSvg from 'assets/svg/misc/StageFirstTextBck.svg';
import {
  Wrapper, CentralizingBox, ParagraphWrapper, ParagraphBackground,
  TitleWrapper, Title, Text, ImageWrapper, Image
} from './styled';

/**
 * First part of 'How to work' section.
 */
export default () => (
  <Wrapper>
    <CentralizingBox>
      <ImageWrapper>
        <Image src={PictureSvg} alt='' draggable='false' />
      </ImageWrapper>
    </CentralizingBox>
    <CentralizingBox>
      <ParagraphWrapper>
        <TitleWrapper>
          <Title>Воспользуйтесь поиском кандидата.</Title>
        </TitleWrapper>
        <Text>
          Для того чтобы начать поиск отзывов с прошлого
          места работы кандидата, необходимы имя, фамилия
          и LinkedIn
        </Text>
        <ParagraphBackground src={ParagraphBackgroundSvg} alt='' />
      </ParagraphWrapper>
    </CentralizingBox>
  </Wrapper>
);
