import { memo } from 'react';

import Content from './Content';
import Head from './Head';

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
