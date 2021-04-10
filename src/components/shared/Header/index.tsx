import { Link } from 'react-router-dom';

import Logo from 'components/shared/Logo';
import LoginBadge from 'components/shared/authenticators/PopupAuthenticator';
import { Wrapper, LogoWrapper, LoginBadgeWrapper } from './styled';

/**
 * The header.
 */
export default () => (
  <Wrapper>
    <LogoWrapper><Link to='/'><Logo /></Link></LogoWrapper>
    <LoginBadgeWrapper><LoginBadge /></LoginBadgeWrapper>
  </Wrapper>
);
