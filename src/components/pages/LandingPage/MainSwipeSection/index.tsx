import { memo } from 'react';

import Swiper from './Swiper';
import TitleView from './TitleView';

import * as styled from './styled';

/**
 * Section with examples swiper.
 */
export default memo(() => (
  <styled.Wrapper>
    <TitleView />
    <Swiper />
  </styled.Wrapper>
));
