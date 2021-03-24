import { ReactNode } from 'react';
import { Wrapper, Loader } from './styled';

/**
 * Loader coverage.
 */
export default (props: { children: ReactNode }) => (
  <>
    <Wrapper>
      <Loader />
    </Wrapper>
    {props.children}
  </>
);
