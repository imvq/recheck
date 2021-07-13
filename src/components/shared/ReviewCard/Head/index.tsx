import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => (
  <styled.Wrapper>
    <styled.Menu>
      <styled.TopBar />
      <styled.MenuContent showTarget={props.showTarget} />
    </styled.Menu>
  </styled.Wrapper>
);
