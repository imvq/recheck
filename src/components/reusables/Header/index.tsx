import Logo from 'components/reusables/Logo';
import LoginBadge from 'components/reusables/LoginBadge';
import { Wrapper, LogoWrapper, LoginBadgeWrapper } from './styled';

/**
 * The header.
 */
export default () => (
  <Wrapper>
    <LogoWrapper><Logo /></LogoWrapper>
    <LoginBadgeWrapper><LoginBadge /></LoginBadgeWrapper>
  </Wrapper>
);
