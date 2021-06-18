import { Link as RouterLink } from 'react-router-dom';

import * as styled from './styled';

/**
 * The footer.
 */
export default () => (
  <styled.Wrapper>
    <styled.SectionWrapper>
      <styled.InnerLogo />
    </styled.SectionWrapper>

    <styled.SectionWrapper>
      <styled.MenuEntryTextMarked>Меню:</styled.MenuEntryTextMarked>
      <RouterLink style={{ textDecoration: 'none', color: 'black' }} to='/#HowToWorkTitle'>
        <styled.MenuEntryText>О платформе</styled.MenuEntryText>
      </RouterLink>
      <RouterLink style={{ textDecoration: 'none', color: 'black' }} to='/#InfoblockTitle'>
        <styled.MenuEntryText>Преимущества</styled.MenuEntryText>
      </RouterLink>
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
