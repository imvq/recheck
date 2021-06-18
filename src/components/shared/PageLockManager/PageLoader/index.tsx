import * as types from './types';
import * as styled from './styled';

/**
 * Loader coverage.
 */
export default (props: types.IProps) => (
  <>
    <styled.DimmedSpace />
    {props.children}
  </>
);
