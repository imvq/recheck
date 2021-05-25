import { IProps } from './types';
import { Wrapper } from './styled';

export default (props: IProps) => (
  <Wrapper
    type='button'
    onClick={() => props.callback(props.page)}
    disabled={!props.isEnabled}
    isCurrent={props.isCurrent}
  >
    {props.page}
  </Wrapper>
);
