import { memo } from 'react';

import * as types from './types';
import * as styled from './styled';

export default memo((props: types.IProps) => (
  <styled.Wrapper>
    <styled.FrameWrapper>
      <styled.Frame>
        {/* Closing button. */}
        <styled.TopWrapper>
          <styled.AdaptedCloseCross onClick={props.onClose} />
        </styled.TopWrapper>

        {/* Body. */}
        <styled.BodyWrapper>
          <styled.Title>{props.title}</styled.Title>
          <styled.CardsWrapper>{props.children}</styled.CardsWrapper>
        </styled.BodyWrapper>
      </styled.Frame>
    </styled.FrameWrapper>

    <styled.ClickableBackground onClick={props.onClose} />
  </styled.Wrapper>
));
