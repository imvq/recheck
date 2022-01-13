import { memo } from 'react';

import * as styled from './styled';

function Footer() {
  return (
    <styled.Wrapper>
      <styled.SectionWrapper>
        <styled.InnerLogo />
      </styled.SectionWrapper>

      <styled.SectionWrapper>
        <styled.MenuEntryTextMarked>Почта:</styled.MenuEntryTextMarked>
        <styled.MenuEntryTextDisabled>info@recheck-candidate.com</styled.MenuEntryTextDisabled>
      </styled.SectionWrapper>

      <styled.SectionWrapper>
        <styled.MenuEntryTextMarked>Соц. сети:</styled.MenuEntryTextMarked>
        <styled.SocialLink href='/'>
          <styled.TelegramIconWrapper />
        </styled.SocialLink>
      </styled.SectionWrapper>
      <styled.EmptyWrapper />
    </styled.Wrapper>
  );
}

export default memo(Footer);
