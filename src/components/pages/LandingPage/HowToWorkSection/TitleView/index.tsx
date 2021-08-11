import { memo } from 'react';

import * as styled from './styled';

/**
 * Title of 'How to work' section.
 */
function TitleView() {
  return (
    <styled.Wrapper id='HowToWorkTitle'>
      <styled.TextWrapper>
        <styled.Text>
          <styled.Text>Как работает </styled.Text>
          <styled.TextColorpickMain>re</styled.TextColorpickMain>
          <styled.TextColorpickAux1>Check</styled.TextColorpickAux1>
          <styled.Text>?</styled.Text>
        </styled.Text>
      </styled.TextWrapper>
    </styled.Wrapper>
  );
}

export default memo(TitleView);
