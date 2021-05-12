import { IProps } from './types';
import { Wrapper, TopBar, PhotoWrapper, BodyWrapper, Span } from './styled';

export default (props: IProps) => (
  <Wrapper>
    <TopBar />
    <BodyWrapper>
      <PhotoWrapper src={props.userData.photoUrl || ''} />
      <Span isEnlarged>{props.userData.name}</Span>
      <Span isDimmed>{`${props.userData.position} — ${props.userData.company.name}`}</Span>
    </BodyWrapper>
  </Wrapper>
);
