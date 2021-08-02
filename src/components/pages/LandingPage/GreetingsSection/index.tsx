import { memo } from 'react';

import Head from './Head';
import Content from './Content';

import * as styled from './styled';

export default memo(() => (
  <styled.Wrapper>
    <Head />
    <Content />
  </styled.Wrapper>
));
