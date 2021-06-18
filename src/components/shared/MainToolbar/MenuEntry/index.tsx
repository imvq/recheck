import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => (
  <styled.Wrapper
    onClick={props.onClick}
    isPressed={props.isPressed}
  >
    {props.children}
  </styled.Wrapper>
);
