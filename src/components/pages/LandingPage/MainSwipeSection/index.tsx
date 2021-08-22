import { memo } from 'react';

import Swiper from './Swiper';

import * as styled from './styled';

/**
 * Section with examples swiper.
 */
function MainSwipeSection() {
  return (
    <styled.Wrapper>
      <styled.TitleOuterWrapper id='MainSwipeViewTitle'>
        <styled.TitleWrapper>
          <styled.TitleText>Примеры отзывов о кандидатах</styled.TitleText>
        </styled.TitleWrapper>
      </styled.TitleOuterWrapper>

      <Swiper />
    </styled.Wrapper>
  );
}

export default memo(MainSwipeSection);
