import { Link as RouterLink } from 'react-router-dom';

import {
  Wrapper, SectionWrapper, EmptyWrapper, InnerLogo, MenuEntryText,
  MenuEntryTextMarked, MenuEntryTextDisabled, SocialLink, TelegramIconWrapper
} from './styled';

/**
 * The footer.
 */
export default () => (
  <Wrapper>
    <SectionWrapper><InnerLogo /></SectionWrapper>
    <SectionWrapper>
      <MenuEntryTextMarked>Меню:</MenuEntryTextMarked>
      <RouterLink style={{ textDecoration: 'none', color: 'black' }} to='/#HowToWorkTitle'>
        <MenuEntryText>О платформе</MenuEntryText>
      </RouterLink>
      <RouterLink style={{ textDecoration: 'none', color: 'black' }} to='/#InfoblockTitle'>
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
