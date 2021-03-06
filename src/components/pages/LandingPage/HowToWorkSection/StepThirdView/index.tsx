import { memo } from 'react';

import ParagraphBackgroundSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepThird/ParagraphBackground.svg';
import PictureSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepThird/Picture.svg';

import * as styled from './styled';

const PictureSection = (
  <styled.CentralizingBox>
    <styled.ImageWrapper>
      <styled.Image src={PictureSvg} alt='' draggable='false' />
    </styled.ImageWrapper>
  </styled.CentralizingBox>
);

const Title = (
  <styled.TitleWrapper>
    <styled.Title>
      <styled.TitleText>Получите отзыв о кандидате в </styled.TitleText>
      <styled.TitleHightlightedMain>re</styled.TitleHightlightedMain>
      <styled.TitleHightlightedAux1>Check.</styled.TitleHightlightedAux1>
    </styled.Title>
  </styled.TitleWrapper>
);

const Text = (
  <styled.Text>
    Вы получите доступ ко всем будущим отзывам о нужном кандидате,
    сможете запрашивать отзывы у его коллег и быть уверенным что они работают вместе.
  </styled.Text>
);

const ContentContainer = (
  <styled.CentralizingBox>
    <styled.ParagraphWrapper>
      {Title}
      {Text}
      <styled.ParagraphBackground src={ParagraphBackgroundSvg} alt='' />
    </styled.ParagraphWrapper>
  </styled.CentralizingBox>
);

/**
 * Last part of 'How to work' section.
 */
function StepThirdView() {
  return (
    <styled.Wrapper>
      {PictureSection}
      {ContentContainer}
    </styled.Wrapper>
  );
}

export default memo(StepThirdView);
