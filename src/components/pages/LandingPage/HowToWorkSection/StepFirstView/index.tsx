import PictureSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepFirst/Pic.svg';
import ParagraphBackgroundSvg from 'assets/images/pages/LandingPage/HowToWorkSection/StepFirst/StepFirstTextBck.svg';

import * as styled from './styled';

/**
 * First part of 'How to work' section.
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
          <styled.Title>Воспользуйтесь поиском кандидата.</styled.Title>
        </styled.TitleWrapper>

        <styled.Text>
          Для того чтобы начать поиск отзывов с прошлого
          места работы кандидата, необходимы имя, фамилия
          и LinkedIn
        </styled.Text>

        <styled.ParagraphBackground src={ParagraphBackgroundSvg} alt='' />
      </styled.ParagraphWrapper>
    </styled.CentralizingBox>
  </styled.Wrapper>
);
