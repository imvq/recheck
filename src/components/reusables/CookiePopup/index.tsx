import CookieImage from 'assets/images/reusables/CookiePopup/Cookie.png';
import {
  Wrapper, SubsectionWrapper, AdaptedImage, TextWrapper, StyledLink, LinkButton
} from './styled';

/**
 * Popup with warning about cookies.
 */
export default () => (
  <Wrapper>
    <SubsectionWrapper>
      <AdaptedImage src={CookieImage} draggable={false} />
      <TextWrapper>
        <span>
          Этот сайт использует cookies. Вы можете изменить настройки cookies в
          своём браузере.&nbsp;&nbsp;
        </span>
        <StyledLink to='/about'>Узнать больше</StyledLink>
      </TextWrapper>
    </SubsectionWrapper>
    <SubsectionWrapper>
      <LinkButton>Принять и закрыть</LinkButton>
    </SubsectionWrapper>
  </Wrapper>
);
