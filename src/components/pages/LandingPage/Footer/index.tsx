import { memo } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import * as styled from './styled';

const Logo = (
  <styled.SectionWrapper>
    <styled.InnerLogo />
  </styled.SectionWrapper>
);

const HowToWorkTitle = (
  <ScrollLink to='HowToWorkTitle' smooth duration={900}>
    <styled.MenuEntryText>О платформе</styled.MenuEntryText>
  </ScrollLink>
);

const InfoblockTitle = (
  <ScrollLink to='InfoblockTitle' smooth duration={600}>
    <styled.MenuEntryText>Преимущества</styled.MenuEntryText>
  </ScrollLink>
);

const MainSwipeTitle = (
  <styled.AdaptingScrollLink to='MainSwipeViewTitle' smooth duration={300}>
    <styled.MenuEntryText>Отзывы</styled.MenuEntryText>
  </styled.AdaptingScrollLink>
);

const MenuSection = (
  <styled.SectionWrapper>
    <styled.MenuEntryTextMarked>Меню:</styled.MenuEntryTextMarked>
    {HowToWorkTitle}
    {InfoblockTitle}
    {MainSwipeTitle}
  </styled.SectionWrapper>
);

const EmailSection = (
  <styled.SectionWrapper>
    <styled.MenuEntryTextMarked>Почта:</styled.MenuEntryTextMarked>
    <styled.MenuEntryTextDisabled>info@recheck-candidate.com</styled.MenuEntryTextDisabled>
  </styled.SectionWrapper>
);

const SocialsSection = (
  <styled.SectionWrapper>
    <styled.MenuEntryTextMarked>Ссылки:</styled.MenuEntryTextMarked>
    <styled.SocialLink href='/privacy-policy'>
      <styled.MenuEntryText>Политика конфиденциальности</styled.MenuEntryText>
    </styled.SocialLink>
  </styled.SectionWrapper>
);

function Footer() {
  return (
    <styled.Wrapper>
      {Logo}
      {MenuSection}
      {EmailSection}
      {SocialsSection}
      <styled.EmptyWrapper />
    </styled.Wrapper>
  );
}

export default memo(Footer);
