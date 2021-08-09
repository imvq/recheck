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
          <styled.Title>
            Взамен оставляйте отзыв о коллеге, с которым работаете сейчас.
          </styled.Title>
        </styled.TitleWrapper>

        <styled.Text>
          Оставив отзыв о вашем сотруднике вы получите просмотр одного кандидата бесплатно.
          Ваш отзыв о другом человеке будет полностью анонимным.
          Также вы можете оформить платную подписку:)
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
