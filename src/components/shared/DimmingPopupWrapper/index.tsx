import { IProps } from './types';
import { Wrapper, ClickableBackground } from './styled';

/**
 * Popup wrapper with dim effect around.
 * Provides callbacks to be triggered on background click.
 */
export default (props: IProps) => (
  <Wrapper>
    {props.children}
    <ClickableBackground onClick={props.onClickedOutside} />
  </Wrapper>
);
