import { memo } from 'react';

import * as types from './types';
import * as styled from './styled';

/**
 * Badge with text. Part of motivator section.
 */
export default memo((props: types.IProps) => (
  <styled.Wrapper>
    <styled.TitleWrapper>
      <styled.LogoText>
        <styled.LogoTextColorpickMain>re</styled.LogoTextColorpickMain>
        <styled.LogoTextColorpickAux1>Check</styled.LogoTextColorpickAux1>
      </styled.LogoText>

      <styled.LogoText>now</styled.LogoText>

    </styled.TitleWrapper>

    <styled.ParagraphWrapper>
      <styled.Paragraph>{props.text}</styled.Paragraph>
    </styled.ParagraphWrapper>
  </styled.Wrapper>
));
