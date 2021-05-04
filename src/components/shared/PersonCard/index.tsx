import { IProps } from './types';
import { Wrapper, TopBar, PhotoWrapper, BodyWrapper, Span } from './styled';

export default (props: IProps) => (
  <Wrapper>
    <TopBar />
    <BodyWrapper>
      <PhotoWrapper src={props.photoUrl || ''} />
      <Span isEnlarged>{props.name}</Span>
      <Span isDimmed>{`${props.position} — ${props.company}`}</Span>
    </BodyWrapper>
  </Wrapper>
);
