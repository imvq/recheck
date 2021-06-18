import PhoneImage from 'assets/images/pages/LandingPage/MotivatorSection/Phone.png';
import TitleView from './TitleView';
import FindButton from './FindButton';
import Badge from './Badge';

import * as styled from './styled';

export default () => (
  <styled.Wrapper>
    <TitleView />

    <styled.FocusView>
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

      <styled.AnchorSticky>
        <styled.Image src={PhoneImage} alt='' />
        <styled.ButtonWrapper><FindButton /></styled.ButtonWrapper>
      </styled.AnchorSticky>
    </styled.FocusView>
  </styled.Wrapper>
);
