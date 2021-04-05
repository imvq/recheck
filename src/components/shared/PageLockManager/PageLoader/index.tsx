import { IProps } from './types';
import { Wrapper, Loader } from './styled';

/**
 * Loader coverage.
 */
export default (props: IProps) => (
  <>
    <Wrapper>
      <Loader />
    </Wrapper>
    {props.children}
  </>
);
