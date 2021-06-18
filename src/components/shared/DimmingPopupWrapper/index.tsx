import * as types from './types';
import * as styled from './styled';

/**
 * Popup wrapper with dim effect around.
 * Provides callbacks to be triggered on background click.
 */
export default (props: types.IProps) => (
  <styled.Wrapper>
    {props.children}
    <styled.ClickableBackground onClick={props.onClickedOutside} />
  </styled.Wrapper>
);
