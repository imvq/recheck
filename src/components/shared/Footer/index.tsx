import { Link as RouterLink } from 'react-router-dom';
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
      <RouterLink to='/#HowToWorkTitle'>
        <MenuEntryText>О платформе</MenuEntryText>
      </RouterLink>
      <RouterLink to='/#InfoblockTitle'>
        <MenuEntryText>Преимущества</MenuEntryText>
      </RouterLink>
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
