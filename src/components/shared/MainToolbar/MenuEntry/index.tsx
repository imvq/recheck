import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => (
  <styled.Wrapper isPressed={props.isPressed}>{props.text}</styled.Wrapper>
);
