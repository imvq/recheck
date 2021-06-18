import ContentPic from 'assets/images/pages/LandingPage/GreetingsSection/Content/ContentPic.svg';
import SearchButtonGroup from './SearchButtonGroup';

import * as styled from './styled';

/**
 * Content of greetings section.
 */
export default () => (
  <styled.Wrapper>
    <styled.PictureWrapper>
      <styled.Picture src={ContentPic} alt='' draggable='false' />
    </styled.PictureWrapper>

    <styled.TextWrapper>
      <styled.ActionGroup>
        <styled.ActionGroupText>
          Найди отзывы о кандидате с прошлых мест работы
        </styled.ActionGroupText>
        <SearchButtonGroup />
      </styled.ActionGroup>
    </styled.TextWrapper>
  </styled.Wrapper>
);
