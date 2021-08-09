import { memo } from 'react';

import PictureSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepFirst/Pic.svg';
import ParagraphBackgroundSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepFirst/StepFirstTextBck.svg';

import * as styled from './styled';

/**
 * First part of 'How to work' section.
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
          <styled.Title>Воспользуйтесь поиском кандидата.</styled.Title>
        </styled.TitleWrapper>

        <styled.Text>
          Вам достаточно знать Имя, Фамилию или компанию кандидата чтобы найти его.
          Если его еще нет на платформе, вы сможете отправить приглашение и мы
          запросим отзывы у его коллег.
        </styled.Text>

        <styled.ParagraphBackground src={ParagraphBackgroundSvg} alt='' />
      </styled.ParagraphWrapper>
    </styled.CentralizingBox>
  </styled.Wrapper>
));
