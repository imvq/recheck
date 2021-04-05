import {
  Wrapper, Frame, StagePictureWrapper, StagePicture, ContentWrapper,
  Header, Input, FindButtonDesktop, FindButtonMobile, ClickableBackground
} from './styled';
import { IProps } from './types';

/**
 * Popup activating on search button click.
 */
export default (props: IProps) => (
  <Wrapper>
    <Frame>
      <StagePictureWrapper><StagePicture /></StagePictureWrapper>
      <ContentWrapper>
        <Header>Поиск кандидата</Header>
        <Input type='text' placeholder='Ссылка на LinkedIn' />
        <FindButtonDesktop />
        <FindButtonMobile>Найти кандидата</FindButtonMobile>
      </ContentWrapper>
    </Frame>
    <ClickableBackground onClick={props.onClose} />
  </Wrapper>
);
