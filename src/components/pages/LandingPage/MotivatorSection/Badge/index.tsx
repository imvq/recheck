import {
  Wrapper, TitleWrapper, LogoText, LogoTextColorpickMain,
  LogoTextColorpickAux1, ParagraphWrapper
} from './styled';
import { BadgeProps } from './types';

/**
 * Badge with text. Part of motivator section.
 */
export default ({ text }: BadgeProps) => (
  <Wrapper>
    <TitleWrapper>
      <LogoText>
        <LogoTextColorpickMain>re</LogoTextColorpickMain>
        <LogoTextColorpickAux1>Check</LogoTextColorpickAux1>
      </LogoText>
      <LogoText>now</LogoText>
    </TitleWrapper>
    <ParagraphWrapper><p>{text}</p></ParagraphWrapper>
  </Wrapper>
);
