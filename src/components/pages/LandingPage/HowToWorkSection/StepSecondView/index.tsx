import PictureSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepSecond/Pic.svg';
import ParagraphBackgroundSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepSecond/StepSecondTextBck.svg';
import {
  Wrapper, CentralizingBox, ParagraphWrapper, ParagraphBackground,
  TitleWrapper, Title, Text, ImageWrapper, Image
} from './styled';

/**
 * Middle part of 'How to work' section.
 */
export default () => (
  <Wrapper>
    <CentralizingBox>
      <ParagraphWrapper>
        <TitleWrapper>
          <Title>Взамен оставляйте отзыв о человеке из вашей команды.</Title>
        </TitleWrapper>
        <Text>
          Оставив отзыв о коллеге, с которым тесно работали,
          вы увидите информацию о кандидиате бесплатно.
          Также можете оформить платную подписку:)
        </Text>
        <ParagraphBackground src={ParagraphBackgroundSvg} alt='' />
      </ParagraphWrapper>
    </CentralizingBox>
    <CentralizingBox>
      <ImageWrapper>
        <Image src={PictureSvg} alt='' draggable='false' />
      </ImageWrapper>
    </CentralizingBox>
  </Wrapper>
);
