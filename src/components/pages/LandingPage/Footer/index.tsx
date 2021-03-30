import { Link as ScrollLink } from 'react-scroll';

import {
  Wrapper, SectionWrapper, EmptyWrapper, InnerLogo, MenuEntryText,
  MenuEntryTextMarked, MenuEntryTextDisabled, AdaptingScrollLink,
  SocialLink, TelegramIconWrapper
} from './styled';

/**
 * The footer.
 */
export default () => (
  <Wrapper>
    <SectionWrapper><InnerLogo /></SectionWrapper>
    <SectionWrapper>
      <MenuEntryTextMarked>Меню:</MenuEntryTextMarked>
      <ScrollLink to='HowToWorkTitle' smooth duration={900}>
        <MenuEntryText>О платформе</MenuEntryText>
      </ScrollLink>
      <ScrollLink to='InfoblockTitle' smooth duration={600}>
        <MenuEntryText>Преимущества</MenuEntryText>
      </ScrollLink>
      <AdaptingScrollLink to='MainSwipeViewTitle' smooth duration={300}>
        <MenuEntryText>Отзывы</MenuEntryText>
      </AdaptingScrollLink>
    </SectionWrapper>
    <SectionWrapper>
      <MenuEntryTextMarked>Почта:</MenuEntryTextMarked>
      <MenuEntryTextDisabled>info@recheck-candidate.com</MenuEntryTextDisabled>
    </SectionWrapper>
    <SectionWrapper>
      <MenuEntryTextMarked>Соц. сети:</MenuEntryTextMarked>
      <SocialLink href='/'>
        <TelegramIconWrapper />
      </SocialLink>
    </SectionWrapper>
    <EmptyWrapper />
  </Wrapper>
);
