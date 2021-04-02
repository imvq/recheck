import {
  Wrapper, TitleWrapper, LogoText, LogoTextColorpickMain,
  LogoTextColorpickAux1, ParagraphWrapper
} from './styled';
import { IProps } from './types';

/**
 * Badge with text. Part of motivator section.
 */
export default (props: IProps) => (
  <Wrapper>
    <TitleWrapper>
      <LogoText>
        <LogoTextColorpickMain>re</LogoTextColorpickMain>
        <LogoTextColorpickAux1>Check</LogoTextColorpickAux1>
      </LogoText>
      <LogoText>now</LogoText>
    </TitleWrapper>
    <ParagraphWrapper><p>{props.text}</p></ParagraphWrapper>
  </Wrapper>
);
