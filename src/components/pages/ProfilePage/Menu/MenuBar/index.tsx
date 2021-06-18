import * as types from './types';
import * as styled from './styled';

/**
 * Stateful menu bar to control profile page content view.
 */
export default (props: types.IProps) => (
  <styled.Wrapper>
    <styled.MenuContentTitle>
      {props.currentProfileInfo.currentName}
    </styled.MenuContentTitle>
  </styled.Wrapper>
);
