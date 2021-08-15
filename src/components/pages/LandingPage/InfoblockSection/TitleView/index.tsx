import { memo } from 'react';

import * as styled from './styled';

/**
 * Title of infoblock.
 */
function TitleView() {
  return (
    <styled.Wrapper id='InfoblockTitle'>
      <styled.TextWrapper>
        <styled.Text>
          <styled.Text>Дополнительный </styled.Text>
          <styled.TextColorpickMain>re</styled.TextColorpickMain>
          <styled.TextColorpickAux1>Check </styled.TextColorpickAux1>
          <styled.Text>кандидатов</styled.Text>
        </styled.Text>
      </styled.TextWrapper>
    </styled.Wrapper>
  );
}

export default memo(TitleView);
