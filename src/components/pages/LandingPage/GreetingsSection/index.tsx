import { memo } from 'react';

import Head from './Head';
import Content from './Content';

import * as styled from './styled';

function GreetingsSection() {
  return (
    <styled.Wrapper>
      <Head />
      <Content />
    </styled.Wrapper>
  );
}

export default memo(GreetingsSection);
