import { memo } from 'react';

import ParagraphBackgroundSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepFirst/ParagraphBackground.svg';
import PictureSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepFirst/Picture.svg';

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
    <styled.Title>Воспользуйтесь поиском кандидата.</styled.Title>
  </styled.TitleWrapper>
);

const Text = (
  <styled.Text>
    Вам достаточно знать Имя, Фамилию или компанию кандидата чтобы найти его.
    Если его еще нет на платформе, вы сможете отправить приглашение и мы
    запросим отзывы у его коллег.
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
 * First part of 'How to work' section.
 */
function StepFirstView() {
  return (
    <styled.Wrapper>
      {PictureSection}
      {ContentContainer}
    </styled.Wrapper>
  );
}

export default memo(StepFirstView);
