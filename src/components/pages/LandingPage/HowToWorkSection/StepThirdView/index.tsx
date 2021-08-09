import { memo } from 'react';

import PictureSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepThird/Pic.svg';
import ParagraphBackgroundSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepThird/StepThirdTextBck.svg';

import * as styled from './styled';

/**
 * Last part of 'How to work' section.
 */
export default memo(() => (
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
          Вы получите доступ ко всем будущим отзывам о нужном кандидате,
          сможете запрашивать отзывы у его коллег и быть уверенным что они работают вместе.
        </styled.Text>

        <styled.ParagraphBackground src={ParagraphBackgroundSvg} alt='' />
      </styled.ParagraphWrapper>
    </styled.CentralizingBox>
  </styled.Wrapper>
));
