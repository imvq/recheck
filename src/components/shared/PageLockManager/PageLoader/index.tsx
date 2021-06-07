import { IProps } from './types';
import { DimmedSpace, Loader } from './styled';

/**
 * Loader coverage.
 */
export default (props: IProps) => (
  <>
    <DimmedSpace />
    {props.children}
  </>
);
