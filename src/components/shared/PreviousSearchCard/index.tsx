import { IProps } from './types';
import { Wrapper, PhotoWrapper, Photo, ContentWrapper, Title, Entry } from './styled';

export default (props: IProps) => (
  <Wrapper>
    <PhotoWrapper>
      <Photo src={props.cardData.photoUrl} />
    </PhotoWrapper>
    <ContentWrapper>
      <Title>{props.cardData.name}</Title>
      <Entry>
        <Entry isDimmed>Должность:&nbsp;&nbsp;</Entry>
        <Entry>{props.cardData.position}</Entry>
      </Entry>
      <Entry>
        <Entry isDimmed>Место работы:&nbsp;&nbsp;</Entry>
        <Entry>{props.cardData.company}</Entry>
      </Entry>
    </ContentWrapper>
  </Wrapper>
);
