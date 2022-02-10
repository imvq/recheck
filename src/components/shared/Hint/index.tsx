import { memo } from 'react';
import * as styled from './styled';

interface Props {
  // eslint-disable-next-line
  children: string;
}

function Hint(props: Props) {
  return (
    <styled.HintButtonWrapper>
      <span>?</span>
    </styled.HintButtonWrapper>
  );
}

export default memo(Hint);
