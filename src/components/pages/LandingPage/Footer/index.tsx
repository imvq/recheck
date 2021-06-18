import { Link as ScrollLink } from 'react-scroll';

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

      <ScrollLink to='HowToWorkTitle' smooth duration={900}>
        <styled.MenuEntryText>О платформе</styled.MenuEntryText>
      </ScrollLink>

      <ScrollLink to='InfoblockTitle' smooth duration={600}>
        <styled.MenuEntryText>Преимущества</styled.MenuEntryText>
      </ScrollLink>

      <styled.AdaptingScrollLink to='MainSwipeViewTitle' smooth duration={300}>
        <styled.MenuEntryText>Отзывы</styled.MenuEntryText>
      </styled.AdaptingScrollLink>
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
