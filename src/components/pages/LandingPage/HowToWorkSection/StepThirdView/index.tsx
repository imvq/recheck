import PictureSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepThird/Pic.svg';
import ParagraphBackgroundSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepThird/StepThirdTextBck.svg';

import * as styled from './styled';

/**
 * Last part of 'How to work' section.
 */
export default () => (
  <styled.Wrapper>
    <styled.CentralizingBox>
      <styled.ImageWrapper>
        <styled.Image src={PictureSvg} alt='' draggable='false' />
      </styled.ImageWrapper>
    </styled.CentralizingBox>

    <styled.CentralizingBox>
      <styled.ParagraphWrapper>
        <styled.TitleWrapper>
          <styled.Title>
            <styled.TitleText>Получите отзыв о кандидате в </styled.TitleText>
            <styled.TitleHightlightedMain>re</styled.TitleHightlightedMain>
            <styled.TitleHightlightedAux1>Check.</styled.TitleHightlightedAux1>
          </styled.Title>
        </styled.TitleWrapper>

        <styled.Text>
          После этого вы получите информацию о кандидате.
          Если никто ещё не оставил отзыв, то мы поможем
          связаться с прошлым работодателем и предложим ему
          оставить отзыв о кандидате взамен на использование
          нашей платформы.
        </styled.Text>

        <styled.ParagraphBackground src={ParagraphBackgroundSvg} alt='' />
      </styled.ParagraphWrapper>
    </styled.CentralizingBox>
  </styled.Wrapper>
);
