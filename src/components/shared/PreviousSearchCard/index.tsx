import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => (
  <styled.Wrapper>
    <styled.PhotoWrapper>
      <styled.Photo src={props.cardData.photoUrl} />
    </styled.PhotoWrapper>

    <styled.ContentWrapper>
      <styled.Title>{props.cardData.name}</styled.Title>

      <styled.Entry>
        <styled.Entry isDimmed>Должность:&nbsp;&nbsp;</styled.Entry>
        <styled.Entry>{props.cardData.position}</styled.Entry>
      </styled.Entry>

      <styled.Entry>
        <styled.Entry isDimmed>Место работы:&nbsp;&nbsp;</styled.Entry>
        <styled.Entry>{props.cardData.company}</styled.Entry>
      </styled.Entry>
    </styled.ContentWrapper>
  </styled.Wrapper>
);
