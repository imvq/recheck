import PhoneImage from 'assets/images/LandingPage/MotivatorSection/Phone.png';
import {
  Wrapper, FocusView, Anchor, AnchorSticky, MotivatorBadgeWrapper,
  Image, ButtonWrapper
} from './styled';
import TitleView from './TitleView';
import FindButton from './FindButton';
import Badge from './Badge';

export default () => (
  <Wrapper>
    <TitleView />
    <FocusView>
      <Anchor>
        <MotivatorBadgeWrapper>
          <Badge text='Проверяйте отзывы о кандидате с прошлого места работы.' />
        </MotivatorBadgeWrapper>
        <MotivatorBadgeWrapper>
          <Badge text='Нанимайте подходящих кандидатов.' />
        </MotivatorBadgeWrapper>
        <MotivatorBadgeWrapper>
          <Badge text='Обменивайтесь отзывами о своих сотрудниках.' />
        </MotivatorBadgeWrapper>
      </Anchor>
      <AnchorSticky>
        <Image src={PhoneImage} alt='' />
        <ButtonWrapper><FindButton /></ButtonWrapper>
      </AnchorSticky>
    </FocusView>
  </Wrapper>
);
