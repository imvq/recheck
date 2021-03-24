import PictureSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepThird/Pic.svg';
import ParagraphBackgroundSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepThird/StepThirdTextBck.svg';
import {
  Wrapper, CentralizingBox, ParagraphWrapper, ParagraphBackground,
  TitleWrapper, Title, TitleHightlightedMain, TitleHightlightedAux1,
  Text, ImageWrapper, Image
} from './styled';

/**
 * Last part of 'How to work' section.
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
          <Title>
            <span>Получите отзыв о кандидате в </span>
            <TitleHightlightedMain>re</TitleHightlightedMain>
            <TitleHightlightedAux1>Check.</TitleHightlightedAux1>
          </Title>
        </TitleWrapper>
        <Text>
          После этого вы получите информацию о кандидате.
          Если никто ещё не оставил отзыв, то мы поможем
          связаться с прошлым работодателем и предложим ему
          оставить отзыв о кандидате взамен на использование
          нашей платформы.
        </Text>
        <ParagraphBackground src={ParagraphBackgroundSvg} alt='' />
      </ParagraphWrapper>
    </CentralizingBox>
  </Wrapper>
);
