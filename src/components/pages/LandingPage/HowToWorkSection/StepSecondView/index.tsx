import { memo } from 'react';

import PictureSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepSecond/Pic.svg';
import ParagraphBackgroundSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepSecond/StepSecondTextBck.svg';

import * as styled from './styled';

/**
 * Middle part of 'How to work' section.
 */
export default memo(() => (
  <styled.Wrapper>
    <styled.CentralizingBox>
      <styled.ParagraphWrapper>
        <styled.TitleWrapper>
          <styled.Title>Взамен оставляйте отзыв о человеке из вашей команды.</styled.Title>
        </styled.TitleWrapper>

        <styled.Text>
          Оставив отзыв о коллеге, с которым тесно работали,
          вы увидите информацию о кандидиате бесплатно.
          Также можете оформить платную подписку:)
        </styled.Text>

        <styled.ParagraphBackground src={ParagraphBackgroundSvg} alt='' />
      </styled.ParagraphWrapper>
    </styled.CentralizingBox>

    <styled.CentralizingBox>
      <styled.ImageWrapper>
        <styled.Image src={PictureSvg} alt='' draggable='false' />
      </styled.ImageWrapper>
    </styled.CentralizingBox>
  </styled.Wrapper>
));
