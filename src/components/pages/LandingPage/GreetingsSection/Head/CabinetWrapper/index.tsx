import { Wrapper, Button } from './styled';
import { CabinetButtonProps } from './types';

/**
 * Cabinet wrapper.
 */
export default ({ onClick }: CabinetButtonProps) => (
  <Wrapper>
    <Button onClick={onClick} />
  </Wrapper>
);
