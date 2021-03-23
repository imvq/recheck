import ContentPic from 'assets/svg/LandingPage/GreetingsView/Content/ContentPic.svg';
import SearchButtonGroup from './SearchButtonGroup';
import {
  Wrapper, TextWrapper, PictureWrapper, Picture, ActionGroup
} from './styled';

/**
 * Content of greetings section.
 */
export default () => (
  <Wrapper>
    <PictureWrapper>
      <Picture src={ContentPic} alt='' draggable='false' />
    </PictureWrapper>
    <TextWrapper>
      <ActionGroup>
        <span>Найди отзывы о кандидате с прошлых мест работы</span>
        <SearchButtonGroup />
      </ActionGroup>
    </TextWrapper>
  </Wrapper>
);
