import { memo } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Logo from 'components/shared/Logo';
import ProfileMenuBadge from 'components/shared/ProfileMenuBadge';

import * as styled from './styled';

const LogoSection = (
  <styled.LogoWrapper>
    <Logo />
  </styled.LogoWrapper>
);

const HowToWorkTitle = (
  <ScrollLink to='HowToWorkTitle' smooth duration={300}>
    <styled.TabButton>О платформе</styled.TabButton>
  </ScrollLink>
);

const InfoblockTitle = (
  <ScrollLink to='InfoblockTitle' smooth duration={600}>
    <styled.TabButton>Преимущества</styled.TabButton>
  </ScrollLink>
);

const MainSwipeTitle = (
  <ScrollLink to='MainSwipeViewTitle' smooth duration={900}>
    <styled.TabButton>Отзывы</styled.TabButton>
  </ScrollLink>
);

const Tabs = (
  <styled.TabsWrapper>
    {HowToWorkTitle}
    {InfoblockTitle}
    {MainSwipeTitle}
  </styled.TabsWrapper>
);

const CabinetSection = (
  <styled.CabinetWrapper>
    <ProfileMenuBadge isProfilePageAvailable />
  </styled.CabinetWrapper>
);

function Head() {
  return (
    <styled.Wrapper>
      {LogoSection}
      {Tabs}
      {CabinetSection}
    </styled.Wrapper>
  );
}

export default memo(Head);
