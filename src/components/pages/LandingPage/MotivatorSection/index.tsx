import { memo } from 'react';

import PhoneImage from 'assets/images/pages/LandingPage/MotivatorSection/Phone.png';

import Badge from './Badge';
import FindButton from './FindButton';

import * as styled from './styled';

const Title = (
  <styled.TitleWrapper>
    <styled.TextWrapper>
      <styled.TitleText>Нанимайте проще, быстрее, точнее!</styled.TitleText>
    </styled.TextWrapper>
  </styled.TitleWrapper>
);

const Anchor = (
  <styled.Anchor>
    <styled.MotivatorBadgeWrapper>
      <Badge text='Проверяйте отзывы о кандидате с прошлого места работы.' />
    </styled.MotivatorBadgeWrapper>

    <styled.MotivatorBadgeWrapper>
      <Badge text='Нанимайте подходящих кандидатов.' />
    </styled.MotivatorBadgeWrapper>

    <styled.MotivatorBadgeWrapper>
      <Badge text='Обменивайтесь отзывами о своих сотрудниках.' />
    </styled.MotivatorBadgeWrapper>
  </styled.Anchor>
);

const StickyAnchor = (
  <styled.AnchorSticky>
    <styled.Image src={PhoneImage} alt='' />
    <styled.ButtonWrapper><FindButton /></styled.ButtonWrapper>
  </styled.AnchorSticky>
);

const FocusView = (
  <styled.FocusView>
    {Anchor}
    {StickyAnchor}
  </styled.FocusView>
);

function MotivatorSection() {
  return (
    <styled.Wrapper>
      {Title}
      {FocusView}
    </styled.Wrapper>
  );
}

export default memo(MotivatorSection);
